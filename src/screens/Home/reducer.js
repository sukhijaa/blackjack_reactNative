import produce from 'immer';
import { SET_USER_NAME_ACTIONTYPE } from './actionTypes';

const initialState = {
  displayName: 'Dummy',
};

const homeReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_USER_NAME_ACTIONTYPE.SUCCESS: {
      draft.displayName = action.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);

export default homeReducer;
