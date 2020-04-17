/**
 *  Redux saga class init
 */
import { all } from 'redux-saga/effects';
import homeSaga from 'screens/Home/saga';

export default function* watch() {
  yield all([homeSaga()]);
}
