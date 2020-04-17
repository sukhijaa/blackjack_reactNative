import React from 'react';
import { Image } from 'react-native';
import CardImage from '@assets/card-BMPs/2_of_c2.bmp';
import styles from './styles';

const SingleCardImage = () => {
  return (
    <React.Fragment>
      <Image style={styles.cardImage} source={CardImage} />
    </React.Fragment>
  );
};

export default SingleCardImage;
