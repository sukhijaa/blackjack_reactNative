import { takeLatest, put } from 'redux-saga/effects';
import { SET_USER_NAME_ACTIONTYPE } from './actionTypes';
import { setUserNameAction } from './actions';

function* handleNameChangeSaga(action) {
  yield put(setUserNameAction.Loading(true));

  console.log('Inside Saga', action);
  yield put(setUserNameAction.Success(action.payload));

  yield put(setUserNameAction.Loading(false));
}

export default function* homeSaga() {
  yield takeLatest(SET_USER_NAME_ACTIONTYPE.TRIGGER, handleNameChangeSaga);
}
