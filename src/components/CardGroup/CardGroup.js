import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import styles from './styles';

const CardGroup = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SingleCardImage />
        <SingleCardImage />
        <SingleCardImage />
        <SingleCardImage />
        <SingleCardImage />
      </ScrollView>
    </View>
  );
};

export default CardGroup;
