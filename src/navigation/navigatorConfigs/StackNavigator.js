import { HOME_ROUTE } from '../route.config';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default {
  initialRouteName: HOME_ROUTE.name,
  screenOptions: {
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    gestureEnabled: true,
    transitionSpec: {
      open: config,
      close: config,
    },
  },
};
