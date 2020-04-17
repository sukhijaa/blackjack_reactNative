import { actionCreator } from 'store/actionCreator';
import {
  GIVE_DEALER_CARD_ACTIONTYPE,
  GIVE_PLAYER_A_CARD_ACTIONTYPE,
  QUIT_GAME_ACTIONTYPE,
  SET_DEALER_CARDS_ACTIONTYPE,
  SET_MASTER_DECK_ACTIONTYPE,
  SET_PLAYER_CARDS_ACTIONTYPE,
  START_GAME_ACTIONTYPE,
} from './actionTypes';

export const startGameAction = actionCreator(START_GAME_ACTIONTYPE);
export const quitGameAction = actionCreator(QUIT_GAME_ACTIONTYPE);
export const setMasterDeckAction = actionCreator(SET_MASTER_DECK_ACTIONTYPE);
export const setPlayerCardsAction = actionCreator(SET_PLAYER_CARDS_ACTIONTYPE);
export const setDealerCardsAction = actionCreator(SET_DEALER_CARDS_ACTIONTYPE);
export const givePlayerACardAction = actionCreator(
  GIVE_PLAYER_A_CARD_ACTIONTYPE,
);
export const giveDealerACardAction = actionCreator(GIVE_DEALER_CARD_ACTIONTYPE);
