import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import StackNavigator from './navigatorConfigs/StackNavigator';
import { GAME_ROUTE, HOME_ROUTE } from './route.config';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator {...StackNavigator}>
        <Stack.Screen
          name={HOME_ROUTE.name}
          options={HOME_ROUTE.options}
          component={HOME_ROUTE.component}
        />
        <Stack.Screen
          name={GAME_ROUTE.name}
          options={GAME_ROUTE.options}
          component={GAME_ROUTE.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
