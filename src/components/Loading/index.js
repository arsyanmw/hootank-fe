import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import getData from '../../assets/lottie/getData.json';
import ask from '../../assets/lottie/ask.json';
import waiting from '../../assets/lottie/waiting.json';
import React from 'react';

export const LoadingScreen = () => {
  const loadingText = [
    {
      title: 'Tunggu Sebentar ya..',
      icon: waiting,
      style: {
        height: 120,
      },
    },
    {
      title: 'Mengambil data hutang..',
      icon: getData,
      style: {
        height: 100,
      },
    },
    {
      title: 'Siapa aja ya yang belum bayar?..',
      icon: ask,
      style: {
        height: 80,
      },
    },
  ];
  const random = Math.floor(Math.random() * loadingText.length);

  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          source={loadingText[random].icon}
          autoPlay
          style={[{width: '80%'}, loadingText[random].style]}
        />
        <Text style={{fontWeight: 'bold', color: '#1C658C'}}>
          {loadingText[random].title}
        </Text>
      </View>
    </View>
  );
};
