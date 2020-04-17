import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import SingleCardImage from './SingleCard';

const CardGroup = props => {
  const { cardsToDisplay, lastImageInverted } = props;

  const [imageGroups, setGroups] = useState([]);

  useEffect(() => {
    let imageSplits = [];
    for (let i = 0; i < cardsToDisplay.length; i += 4) {
      const subArray = cardsToDisplay.slice(i, i + 4);
      imageSplits.push(subArray);
    }
    setGroups(imageSplits);
  }, [cardsToDisplay]);

  let imageSplits = cardsToDisplay;

  if (cardsToDisplay.length > 4) {
    imageSplits = [];
    const inserts = 4;
    while (inserts < imageSplits) {}
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {imageGroups.map((cardGroup, index) => {
          return (
            <View style={styles.imageGroup}>
              {cardGroup.map((cardNumber, index) => {
                const isLastImage = lastImageInverted
                  ? index === cardGroup.length - 1
                  : false;
                return (
                  <View key={cardNumber} styles={styles.imageWrapper}>
                    <SingleCardImage
                      cardNumber={cardNumber}
                      inverted={isLastImage}
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

CardGroup.propTypes = {
  cardsToDisplay: PropTypes.array,
  lastImageInverted: PropTypes.bool,
};

CardGroup.defaultProps = {
  cardsToDisplay: [10, 15, 20, 35, 40],
  lastImageInverted: false,
};

export default CardGroup;
