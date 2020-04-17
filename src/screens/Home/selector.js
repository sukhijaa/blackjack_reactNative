import { HOME_REDUCER_KEY } from './constants';
import { createSelector } from 'reselect';

const homeSubStoreSelector = (store = {}) => store[HOME_REDUCER_KEY];

export const userDisplayNameSelector = createSelector(
  homeSubStoreSelector,
  subStore => subStore.displayName,
);
