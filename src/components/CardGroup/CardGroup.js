import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';
import SingleCardImage from './SingleCard';

const CardGroup = props => {
  const { cardsToDisplay } = props;

  return (
    <View style={styles.container}>
      {(cardsToDisplay || []).map(cardNumber => {
        return <SingleCardImage key={cardNumber} cardNumber={cardNumber} />;
      })}
    </View>
  );
};

CardGroup.propTypes = {
  cardsToDisplay: PropTypes.array,
};

CardGroup.defaultProps = {
  cardsToDisplay: [10, 15, 20, 35, 40],
};

export default CardGroup;
