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

  const doNothing = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsArea}>
          <Text>Cards</Text>
      </View>
      <View style={styles.playerActions}>
        <Button
          mode="contained"
          uppercase={true}
          onPress={doNothing}
          contentStyle={styles.actionButtonContent}
          labelStyle={styles.actionButtonLabel}
          style={styles.actionButton}>
          Hit
        </Button>
        <Button
          mode="contained"
          uppercase={true}
          onPress={doNothing}
          contentStyle={styles.actionButtonContent}
          labelStyle={styles.actionButtonLabel}
          style={styles.actionButton}>
          Stand
        </Button>
      </View>
      <Button
        mode="contained"
        uppercase={true}
        style={styles.quitButton}
        labelStyle={styles.quitButtonLabel}
        onPress={handleGameQuit}>
        Quit Game
      </Button>
    </View>
  );
}
