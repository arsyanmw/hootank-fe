import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

export const TouchableCard = props => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    margin: 8,
    elevation: 5,
  },
});
