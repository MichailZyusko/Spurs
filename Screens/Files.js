/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function FilesScreen() {
  return <SafeAreaView style={styles.screen}></SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#141414',
  },
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
});
