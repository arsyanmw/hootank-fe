import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import loading from '../../assets/lottie/loading.json';
import React from 'react';

export const LoadingScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          source={loading}
          autoPlay
          style={{width: '50%', height: 80}}
        />
        <Text style={{fontWeight: 'bold', color: '#1C658C'}}>
          Tunggu Sebentar..
        </Text>
      </View>
    </View>
  );
};
