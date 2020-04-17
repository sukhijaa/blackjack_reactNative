import React from 'react';
import { View, Image } from 'react-native';
import { Headline } from 'react-native-paper';
import styles from './styles';
import { createStructuredSelector } from 'reselect';
import { dealerCardsSelector, gameStatusSelector } from '../../selector';
import { useSelector } from 'react-redux';
import { CardGroup } from 'components';
import CardImages from '../../../../utils/CardImages';

const stateSelector = createStructuredSelector({
  dealerCards: dealerCardsSelector,
  gameStatus: gameStatusSelector,
});

const DealerArea = () => {
  const { dealerCards, gameStatus } = useSelector(stateSelector);
  return (
    <View style={styles.container}>
      <View style={styles.deckAndTitleWrapper}>
        <Headline style={styles.titleText}>Dealer Area</Headline>
        <Image style={styles.deckImage} source={CardImages()} />
      </View>
      <View style={styles.cardsArea}>
        <CardGroup
          cardsToDisplay={dealerCards}
          lastImageInverted={gameStatus}
        />
      </View>
    </View>
  );
};

export default DealerArea;
