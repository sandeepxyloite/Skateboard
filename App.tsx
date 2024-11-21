import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { RouteStack } from './core/route'; 

const App = () => {
  return (
    <NavigationContainer>
      <RouteStack/>
    </NavigationContainer>
  );
};

export default App;