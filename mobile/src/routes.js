import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

// import { Container } from './styles';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
      
    </NavigationContainer>
  );
}
