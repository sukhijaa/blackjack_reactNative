import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { navigate } from 'navigation/NavigationService';

export default function Home() {
  const handleGameQuit = () => {
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
