/**
 *  Redux saga class init
 */
import { all } from 'redux-saga/effects';
import homeSaga from 'screens/Home/saga';
import gameSagas from 'screens/Game/saga';

export default function* watch() {
  yield all([homeSaga(), gameSagas()]);
}
