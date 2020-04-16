import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import LogoImage from '@assets/black-jack-logo.png';
import { Button } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={LogoImage} />
      <Text style={styles.text}>Welcome To BlackJack</Text>
      <Button
        mode="contained"
        uppercase={true}
        contentStyle={styles.startGameButton}
        labelStyle={styles.startGameButtonLabel}
        onPress={() => console.log('Pressed')}>
        Start Game
      </Button>
    </View>
  );
}
