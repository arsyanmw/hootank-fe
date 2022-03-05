import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const FAB = ({...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.btnContainer}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#3498db',
    borderRadius: 100,
    padding: 10,
    elevation: 5,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
});
