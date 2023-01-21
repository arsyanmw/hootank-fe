import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const globalVariable = {
    width,
    height,
    padding: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
};
