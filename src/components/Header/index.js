import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {globalVariable} from '../../variables/global';

// assets
import LeftArrow from '../../assets/icons/left-arrow.svg';

export const Header = props => {
  return (
    <View
      style={[
        {
          position: 'absolute',
          height: 60,
          width: '100%',
          justifyContent: 'center',
          backgroundColor: '#fff',
        },
        globalVariable.padding,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={props.nav} style={{padding: 10}}>
          <LeftArrow width={20} height={20} fill="#b2bec3" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000',
            marginLeft: 10,
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};
