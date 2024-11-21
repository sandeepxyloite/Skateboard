import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../pages/login';
import WelcomeScreen from '../pages/welcome';

const Stack = createNativeStackNavigator(); 

export const RouteStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="login" 
        options={{ headerShown: false }} 
        component={LoginScreen} />
      </Stack.Navigator>
  );
};
