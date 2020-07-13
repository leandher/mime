import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Configurations from './pages/Configurations';
import Game from './pages/Game';
import Home from './pages/Home';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#FAF9FE',
          },
        }}
        initialRouteName="Home"
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Configurations" component={Configurations} />
        <AppStack.Screen name="Game" component={Game} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
