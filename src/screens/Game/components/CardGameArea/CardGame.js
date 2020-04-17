import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

const CardGameArea = props => {
  return (
    <View style={styles.cardsArea}>
      <View style={styles.dealerArea} />
      <Divider style={styles.divider} />
      <View style={styles.userArea} />
      <Text>Cards</Text>
    </View>
  );
};

export default CardGameArea;
