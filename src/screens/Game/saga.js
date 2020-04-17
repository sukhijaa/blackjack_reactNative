import { takeLatest, put } from 'redux-saga/effects';
import {
  GIVE_DEALER_CARD_ACTIONTYPE,
  GIVE_PLAYER_A_CARD_ACTIONTYPE,
  QUIT_GAME_ACTIONTYPE,
  START_GAME_ACTIONTYPE,
  TOGGLE_QUIT_MODAL_ACTIONTYPE,
} from './actionTypes';
import {
  giveDealerACardAction,
  givePlayerACardAction,
  quitGameAction,
  setMasterDeckAction,
  startGameAction,
  toggleQuitModalAction,
} from './actions';
import { getShuffledMainDeckOfCards } from '../../utils/cardsUtils';
import {
  DEALER_STARTING_CARDS_COUNT,
  PLAYER_STARTING_CARDS_COUNT,
} from '../../utils/constants';

function* givePlayerACardSaga() {
  yield put(givePlayerACardAction.Loading(true));
  yield put(givePlayerACardAction.Success());
  yield put(givePlayerACardAction.Loading(false));
}

function* giveDealerACardSaga() {
  yield put(giveDealerACardAction.Loading(true));
  yield put(giveDealerACardAction.Success());
  yield put(giveDealerACardAction.Loading(false));
}

function* handleGameStartSaga() {
  yield put(quitGameAction.Trigger());
  yield put(startGameAction.Loading(true));
  const masterDeck = getShuffledMainDeckOfCards();
  yield put(setMasterDeckAction.Success(masterDeck));

  for (let i = 0; i < PLAYER_STARTING_CARDS_COUNT; i++) {
    yield put(givePlayerACardAction.Trigger());
  }

  for (let i = 0; i < DEALER_STARTING_CARDS_COUNT; i++) {
    yield put(giveDealerACardAction.Trigger());
  }
  yield put(startGameAction.Loading(false));
}

function* quitGameSaga() {
  yield put(quitGameAction.Loading(true));
  yield put(quitGameAction.Success());
  yield put(quitGameAction.Loading(false));
}

function* toggleModalSaga(action) {
  yield put(toggleQuitModalAction.Loading(true));
  yield put(toggleQuitModalAction.Success(action.payload));
  yield put(toggleQuitModalAction.Loading(false));
}

export default function* gameSagas() {
  yield takeLatest(START_GAME_ACTIONTYPE.TRIGGER, handleGameStartSaga);
  yield takeLatest(GIVE_PLAYER_A_CARD_ACTIONTYPE.TRIGGER, givePlayerACardSaga);
  yield takeLatest(GIVE_DEALER_CARD_ACTIONTYPE.TRIGGER, giveDealerACardSaga);
  yield takeLatest(QUIT_GAME_ACTIONTYPE.TRIGGER, quitGameSaga);
  yield takeLatest(TOGGLE_QUIT_MODAL_ACTIONTYPE.TRIGGER, toggleModalSaga);
}
