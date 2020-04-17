import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styles from './styles';
import CardImages from '../../utils/CardImages';

const SingleCardImage = props => {
  const { cardNumber, inverted } = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    const currentImage = CardImages(inverted ? null : cardNumber);
    setImage(currentImage);
  }, [cardNumber, inverted]);

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
  inverted: PropTypes.bool,
};

SingleCardImage.defaultProps = {
  cardNumber: 1,
  inverted: false,
};

export default SingleCardImage;
