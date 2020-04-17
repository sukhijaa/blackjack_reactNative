import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  dealerCardsSelector,
  dealersTurnSelector,
  playerCardsSelector,
} from '../selector';
import { useDispatch, useSelector } from 'react-redux';
import { getCardValue } from '../../../utils/cardsUtils';
import {
  gameCompletedAction,
  giveDealerACardAction,
  playerStandAction,
  toggleQuitModalAction,
} from '../actions';
import { GAME_LOST_MESSAGE, GAME_WON_MESSAGE } from '../constants';

const stateSelector = createStructuredSelector({
  userCards: playerCardsSelector,
  dealerCards: dealerCardsSelector,
  dealersTurn: dealersTurnSelector,
});

const sumReducer = (curVal, aggregatedVal) => curVal + aggregatedVal;

const GameSimulator = () => {
  const { userCards, dealerCards, dealersTurn } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const userCardValues = userCards.map(getCardValue);
  const dealerCardValues = dealerCards.map(getCardValue);
  const userCardSum = userCardValues.reduce(sumReducer, 0);
  const dealerCardSum = dealerCardValues.reduce(sumReducer, 0);

  const resultFinalized = result => {
    let won = !!result;
    if (result === undefined) {
      won =
        userCardSum === dealerCardSum
          ? userCards.length <= dealerCards.length
          : userCardSum >= dealerCardSum;
    }
    dispatch(gameCompletedAction.Trigger());
    dispatch(
      toggleQuitModalAction.Trigger(won ? GAME_WON_MESSAGE : GAME_LOST_MESSAGE),
    );
  };

  // If both got sum === 21, then whoever has lesser cards win. User given preference
  if (dealerCardSum === userCardSum && dealerCardSum === 21) {
    resultFinalized();
  }

  // If sum of anyone > 21, he loses
  if (dealerCardSum > 21) {
    resultFinalized(true);
  }
  if (userCardSum > 21) {
    resultFinalized(false);
  }

  if (dealersTurn) {
    // If dealer card sum < 17, then he has to take a card mandatorily
    if (dealerCardSum < 17) {
      console.log('Giving Dealer A Card');
      setTimeout(() => {
        dispatch(giveDealerACardAction.Trigger());
      }, 3000);
    } else {
      resultFinalized();
    }
  } else {
    // User reached 21. Hence stand him
    if (userCardSum === 21) {
      dispatch(playerStandAction.Trigger());
    }
  }

  return null;
};

export default GameSimulator;
