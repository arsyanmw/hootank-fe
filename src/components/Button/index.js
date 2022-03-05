import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../variables/colors';

export const Button = props => {
  const {style = ''} = props;
  return (
    <TouchableOpacity
      style={[styles.btnContainer, style]}
      onPress={props.onPress}>
      <Text style={styles.btnText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.btn.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
