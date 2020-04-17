import { loadingReducer } from './reducers/loadingReducer';
import { HOME_REDUCER_KEY } from 'screens/Home/constants';
import homeReducer from 'screens/Home/reducer';

export default {
  loadingReducer,
  [HOME_REDUCER_KEY]: homeReducer,
};
