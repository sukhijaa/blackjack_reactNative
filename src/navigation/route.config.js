import { HOMEPAGE_TITLE_TEXT, GAME_TITLE_TEXT } from 'utils/constants';
import Home from 'screens/Home';
import Game from 'screens/Game';

export const HOME_ROUTE = {
  name: 'Home',
  component: Home,
  options: { title: HOMEPAGE_TITLE_TEXT },
};

export const GAME_ROUTE = {
  name: 'Game',
  component: Game,
  options: navigationObj => {
    const { route } = navigationObj;
    return { title: route.params.displayName, headerLeft: null };
  },
};
