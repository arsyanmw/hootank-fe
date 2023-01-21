import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import getData from '../../assets/lottie/getData.json';
import ask from '../../assets/lottie/ask.json';
import waiting from '../../assets/lottie/waiting.json';
import sending from '../../assets/lottie/sending.json';
import React from 'react';

export const LoadingScreen = props => {
    const {type = ''} = props;
    let loading = null;

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

    const sendLoading = [
        {
            title: 'Membuat data hutang..',
            icon: sending,
            style: {
                height: 100,
            },
        },
        {
            title: 'Tunggu Sebentar ya..',
            icon: sending,
            style: {
                height: 100,
            },
        },
    ];

    const random = () => {
        if (type === 'send') {
            return Math.floor(sendLoading.length * Math.random());
        } else {
            return Math.floor(loadingText.length * Math.random());
        }
    };

    if (type === 'send') {
        loading = sendLoading[random()];
    } else {
        loading = loadingText[random()];
    }

    return (
        <View style={{height: '100%'}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <LottieView
                    source={loading.icon}
                    autoPlay
                    style={[{width: '80%'}, loading.style]}
                />
                <Text
                    style={{fontFamily: 'Mulish-ExtraBold', color: '#1C658C'}}>
                    {loading.title}
                </Text>
            </View>
        </View>
    );
};
