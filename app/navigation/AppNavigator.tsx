import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExerciseSelectorScreen from '../screens/ExerciseSelectorScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ExerciseSelector" component={ExerciseSelectorScreen} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
