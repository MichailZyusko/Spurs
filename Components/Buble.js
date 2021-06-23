/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Buble({element}) {
  return (
    <View style={styles.buble}>
      <View style={styles.time}>
        <Text style={styles.text}>08:30</Text>
        <Text style={styles.text}>09:50</Text>
      </View>
      <View style={styles.vl} />
      <View style={styles.lessons}>
        <Text style={styles.text}>Практика</Text>
        <Text style={styles.text}>Математический Анализ</Text>
      </View>
      <View style={styles.vl} />
      <View style={styles.place}>
        <Text style={styles.text}>313</Text>
        <Text style={styles.text}>К3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buble: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#666',
    width: '95%',
    height: '15%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  time: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  vl: {
    borderLeftColor: 'white',
    borderLeftWidth: 1,
    height: '80%',
    alignSelf: 'center',
  },
  lessons: {
    flex: 2,
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  place: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
  },
});
