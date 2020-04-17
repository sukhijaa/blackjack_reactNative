import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styles from './styles';
import CardImages from '../../utils/CardImages';

const SingleCardImage = props => {
  const { cardNumber } = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    const currentImage = CardImages(cardNumber);
    setImage(currentImage);
  }, [cardNumber]);

  if (!image) {
    return null;
  }
  return (
    <React.Fragment>
      <Image style={styles.cardImage} source={image} />
    </React.Fragment>
  );
};

SingleCardImage.propTypes = {
  cardNumber: PropTypes.number,
};

SingleCardImage.defaultProps = {
  cardNumber: 1,
};

export default SingleCardImage;
