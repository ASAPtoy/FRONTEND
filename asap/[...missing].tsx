import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('ClosetFinderScreen' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <TouchableOpacity onPress={goToHomeScreen}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
    marginTop: 15,
    paddingVertical: 15,
  },
});
