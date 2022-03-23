import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import {Store} from './config';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
