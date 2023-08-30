
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomepageScreen from '../screens/HomepageScreen';
import MetadataDisplayScreen from '../screens/MetadataDisplayScreen';
import MetadataDetailScreen from '../screens/MetadataDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Homepage" component={HomepageScreen} />
      <Tab.Screen name="Metadata" component={MetadataStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

const MetadataStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MetadataDisplay" component={MetadataDisplayScreen} />
    <Stack.Screen name="MetadataDetail" component={MetadataDetailScreen} />
  </Stack.Navigator>
);

export default MainNavigator;