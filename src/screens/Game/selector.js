import { GAME_REDUCER_KEY } from './constants';
import { createSelector } from 'reselect';

const gameSubStoreSelector = (store = {}) => store[GAME_REDUCER_KEY];

export const gameStatusSelector = createSelector(
  gameSubStoreSelector,
  subStore => subStore.gameInProgress,
);

export const masterDeckSelector = createSelector(
  gameSubStoreSelector,
  subStore => subStore.mainDeck,
);

export const playerCardsSelector = createSelector(
  gameSubStoreSelector,
  subStore => subStore.playerCards,
);

export const dealerCardsSelector = createSelector(
  gameSubStoreSelector,
  subStore => subStore.dealerCards,
);
