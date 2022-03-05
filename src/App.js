import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Home from './pages/Home';
import {Store} from './config';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Home />
      </View>
    </Provider>
  );
};

export default App;
