import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { navigate } from 'navigation/NavigationService';
import { useDispatch } from 'react-redux';
import { quitGameAction } from './actions';

export default function Home() {
  const dispatch = useDispatch();
  const handleGameQuit = () => {
    dispatch(quitGameAction.Trigger());
    navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Game Area</Text>
      <Button
        mode="contained"
        uppercase={true}
        contentStyle={styles.startGameButton}
        labelStyle={styles.startGameButtonLabel}
        onPress={handleGameQuit}>
        Quit Game
      </Button>
    </View>
  );
}
