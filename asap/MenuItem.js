import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuItem = ({ title }) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default MenuItem;
