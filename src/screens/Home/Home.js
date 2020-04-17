import React, { useState } from 'react';
import { Text, Image, SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import LogoImage from '@assets/black-jack-logo.png';
import { Button, TextInput } from 'react-native-paper';
import { navigate } from 'navigation/NavigationService';
import { userDisplayNameSelector } from './selector';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { setUserNameAction } from './actions';
import { startGameAction } from '../Game/actions';

const stateSelector = createStructuredSelector({
  displayName: userDisplayNameSelector,
});

export default function Home() {
  const { displayName } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGameAction.Trigger());
    navigate('Game', { displayName });
  };

  const handleNameChange = newName => {
    console.log(newName);
    dispatch(setUserNameAction.Trigger(newName));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.logoImage} source={LogoImage} />
        <Text style={styles.text}>Welcome To BlackJack</Text>
      </ScrollView>
      <TextInput
        label="Enter Your Name"
        style={styles.textInput}
        onChangeText={handleNameChange}
        value={displayName}
      />
      <Button
        mode="contained"
        uppercase={true}
        contentStyle={styles.startGameButton}
        labelStyle={styles.startGameButtonLabel}
        onPress={handleStartGame}>
        Start Game
      </Button>
    </View>
  );
}
