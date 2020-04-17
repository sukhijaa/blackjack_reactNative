import produce from 'immer';
import {
  GIVE_DEALER_CARD_ACTIONTYPE,
  GIVE_PLAYER_A_CARD_ACTIONTYPE,
  QUIT_GAME_ACTIONTYPE,
  SET_DEALER_CARDS_ACTIONTYPE,
  SET_MASTER_DECK_ACTIONTYPE,
  SET_PLAYER_CARDS_ACTIONTYPE,
  START_GAME_ACTIONTYPE, TOGGLE_QUIT_MODAL_ACTIONTYPE,
} from './actionTypes';

const initialState = {
  gameInProgress: false,
  mainDeck: [],
  playerCards: [],
  dealerCards: [],
  modalText: '',
};

const gameReducer = produce((draft, action) => {
  switch (action.type) {
    case START_GAME_ACTIONTYPE.SUCCESS: {
      draft.gameInProgress = true;
      break;
    }
    case SET_MASTER_DECK_ACTIONTYPE.SUCCESS: {
      draft.mainDeck = action.payload;
      break;
    }
    case SET_PLAYER_CARDS_ACTIONTYPE.SUCCESS: {
      draft.playerCards = action.payload;
      break;
    }
    case SET_DEALER_CARDS_ACTIONTYPE.SUCCESS: {
      draft.dealerCards = action.payload;
      break;
    }
    case GIVE_DEALER_CARD_ACTIONTYPE.SUCCESS: {
      const mainDecksCards = [...draft.mainDeck];
      const dealerCards = [...draft.dealerCards];
      const newCard = mainDecksCards.pop();
      dealerCards.push(newCard);
      draft.dealerCards = dealerCards;
      draft.mainDeck = mainDecksCards;
      break;
    }
    case GIVE_PLAYER_A_CARD_ACTIONTYPE.SUCCESS: {
      const mainDecksCards = [...draft.mainDeck];
      const playerCards = [...draft.playerCards];
      const newCard = mainDecksCards.pop();
      playerCards.push(newCard);
      draft.playerCards = playerCards;
      draft.mainDeck = mainDecksCards;
      break;
    }
    case QUIT_GAME_ACTIONTYPE.SUCCESS: {
      return initialState;
    }
    case TOGGLE_QUIT_MODAL_ACTIONTYPE.SUCCESS: {
      draft.modalText = draft.modalText ? '' : action.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);

export default gameReducer;
