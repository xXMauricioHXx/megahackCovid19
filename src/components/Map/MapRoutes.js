import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Map from './';
import Order from '../Order';

const tabScreenOptions = (icon, label) => ({
  tabBarLabel: label,
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={icon} color={color} size={size} style={{ marginTop: 5 }} />
  ),
});
const MapRoutes = () => (
  <Tab.Navigator
    initialRouteName={'Map'}
    tabBarOptions={{
      activeTintColor: '#ffff',
      activeBackgroundColor: '#c24a42',
      inactiveTintColor: '#ffff',
      style: {
        backgroundColor: '#f04c41',
        height: 60,
        elevation: 1,
      },
    }}
  >
    <Tab.Screen
      name="Map"
      component={Map}
      options={tabScreenOptions('md-pin', 'Mapa')}
    />
    <Tab.Screen
      name="Order"
      component={Order}
      options={tabScreenOptions('md-reorder', 'Pedidos')}
    />
  </Tab.Navigator>
);

export default MapRoutes;
