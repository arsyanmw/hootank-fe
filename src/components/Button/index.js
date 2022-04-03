import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../variables/colors';

// assets
import Check from '../../assets/icons/check.svg';

export const Button = props => {
  const {style = '', tipe = '', label = ''} = props;

  // button color style based on props tipe
  const buttonStyle = {
    backgroundColor:
      tipe === 'primary'
        ? colors.primary
        : tipe === 'success'
        ? '#27ae60'
        : tipe === 'danger'
        ? '#e74c3c'
        : colors.btn.primary,
  };

  const Icon = () => {
    if (tipe === 'success') {
      return <Check width={20} height={20} fill={'#fff'} />;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.btnContainer, style, buttonStyle]}
      onPress={props.onPress}>
      {label != '' ? <Text style={styles.btnText}>{label}</Text> : Icon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Mulish-ExtraBold',
  },
});
