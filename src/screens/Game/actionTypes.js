import { actionTypeCreator } from 'store/actionCreator';

export const START_GAME_ACTIONTYPE = actionTypeCreator('game/startGame');
export const SET_MASTER_DECK_ACTIONTYPE = actionTypeCreator(
  'game/setMasterDeck',
);
export const SET_PLAYER_CARDS_ACTIONTYPE = actionTypeCreator(
  'game/setPlayerCards',
);
export const SET_DEALER_CARDS_ACTIONTYPE = actionTypeCreator(
  'game/setDealerCards',
);

export const GIVE_PLAYER_A_CARD_ACTIONTYPE = actionTypeCreator(
  'game/giveCardPlayer',
);

export const GIVE_DEALER_CARD_ACTIONTYPE = actionTypeCreator(
  'game/giveCardDealer',
);
