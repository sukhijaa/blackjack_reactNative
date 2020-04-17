import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GAME_COMPLETED_ACTIONTYPE,
  GIVE_DEALER_CARD_ACTIONTYPE,
  GIVE_PLAYER_A_CARD_ACTIONTYPE,
  PLAYER_STAND_ACTIONTYPE,
  QUIT_GAME_ACTIONTYPE,
  START_GAME_ACTIONTYPE,
  TOGGLE_QUIT_MODAL_ACTIONTYPE,
} from './actionTypes';
import {
  gameCompletedAction,
  giveDealerACardAction,
  givePlayerACardAction,
  playerStandAction,
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

function* perFormLoadingSuccess(action, paylaod) {
  yield put(action.Loading(true));
  yield put(action.Success(paylaod));
  yield put(action.Loading(false));
}

function* givePlayerACardSaga() {
  yield call(perFormLoadingSuccess, givePlayerACardAction);
}

function* giveDealerACardSaga() {
  yield call(perFormLoadingSuccess, giveDealerACardAction);
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
  yield put(startGameAction.Success());
  yield put(startGameAction.Loading(false));
}

function* quitGameSaga() {
  yield call(perFormLoadingSuccess, quitGameAction);
}

function* toggleModalSaga(action) {
  yield call(perFormLoadingSuccess, toggleQuitModalAction, action.payload);
}

function* playerStandSaga() {
  yield call(perFormLoadingSuccess, playerStandAction);
}

function* gameCompletedSaga() {
  yield call(perFormLoadingSuccess, gameCompletedAction);
}

export default function* gameSagas() {
  yield takeLatest(START_GAME_ACTIONTYPE.TRIGGER, handleGameStartSaga);
  yield takeLatest(GIVE_PLAYER_A_CARD_ACTIONTYPE.TRIGGER, givePlayerACardSaga);
  yield takeLatest(GIVE_DEALER_CARD_ACTIONTYPE.TRIGGER, giveDealerACardSaga);
  yield takeLatest(QUIT_GAME_ACTIONTYPE.TRIGGER, quitGameSaga);
  yield takeLatest(TOGGLE_QUIT_MODAL_ACTIONTYPE.TRIGGER, toggleModalSaga);
  yield takeLatest(PLAYER_STAND_ACTIONTYPE.TRIGGER, playerStandSaga);
  yield takeLatest(GAME_COMPLETED_ACTIONTYPE.TRIGGER, gameCompletedSaga);
}
