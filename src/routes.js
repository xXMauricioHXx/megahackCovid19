import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MapRoutes from './components/Map/MapRoutes';
import { Restaurant } from './components/Restaurant';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#f04c41' },
    }}
  >
    <Stack.Screen
      name="Home"
      component={MapRoutes}
      options={{ title: '', headerStyle: { height: 0, width: 0 } }}
    />
    <Stack.Screen
      name="Restaurant"
      component={Restaurant}
      options={{
        title: 'Restaurante',
      }}
    />
  </Stack.Navigator>
);

export default Routes;
