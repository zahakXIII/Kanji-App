/**
 * Navigation principale
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz Kanji' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Résultats', headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
