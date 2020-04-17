import { loadingReducer } from './reducers/loadingReducer';
import { HOME_REDUCER_KEY } from 'screens/Home/constants';
import homeReducer from 'screens/Home/reducer';
import { GAME_REDUCER_KEY } from 'screens/Game/constants';
import gameReducer from 'screens/Game/reducer';

export default {
  loadingReducer,
  [HOME_REDUCER_KEY]: homeReducer,
  [GAME_REDUCER_KEY]: gameReducer,
};
