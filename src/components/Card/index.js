import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Card = props => {
  return <View style={styles.cardContainer}>{props.children}</View>;
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
