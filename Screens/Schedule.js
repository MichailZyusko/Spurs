/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import Buble from '../Components/Buble.js';

const URL =
  'https://schedule-for-isei.herokuapp.com/schedule?faculty=2&department=2&course=2&group=133&date=24.05.2021%200:00:00';

export default function ScheduleScreen() {
  const getDataUsingSimpleGetCall = () => {
    let scheduleData;

    console.log('START');
    // let promise = new Promise(function (resolve, reject) {
    //   // функция-исполнитель (executor)
    //   // "певец"
    // });
    axios
      .get(URL)
      .then(function (response) {
        console.log('response', response.data);
        scheduleData = response.data;
        scheduleData.filter(element => {
          element.DayOfWeek === 'Понедельник';
        });
        return (
          <SafeAreaView style={styles.screen}>
            <View style={styles.Header}>
              <Text style={styles.GroupNumber}>А91ИСТ2</Text>
              <Text style={styles.DayOfWeek}>${scheduleData.DayOfWeek}</Text>
            </View>
            <View style={styles.DayOfTheMonth}>
              <Text style={styles.GroupNumber}>24.06</Text>
              <Text style={styles.GroupNumber}>25.06</Text>
              <Text style={styles.GroupNumber}>26.06</Text>
            </View>
            <View style={styles.container}>
              <FlatList data={scheduleData} renderItem={Buble}>
                {/* <Buble addHandler={item} />
                <Buble /> */}
              </FlatList>
            </View>
          </SafeAreaView>
        );
      })
      .catch(function (error) {
        console.log('error', error);
      })
      .finally(function () {
        console.log('END');
      });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.Header}>
        <Text style={styles.GroupNumber} onPress={getDataUsingSimpleGetCall}>
          А91ИСТ2
        </Text>
        <Text style={styles.DayOfWeek}>Monday</Text>
      </View>
      <View style={styles.DayOfTheMonth}>
        <Text style={styles.GroupNumber}>24.06</Text>
        <Text style={styles.GroupNumber}>25.06</Text>
        <Text style={styles.GroupNumber}>26.06</Text>
      </View>
      <View style={styles.container}>
        {/* <FlatList> */}
        {/* <TouchableOpacity onPress={getDataUsingSimpleGetCall}> */}
        <Buble />
        {/* </TouchableOpacity> */}

        <Buble />
        <Buble />
        {/* </FlatList> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#141414',
  },
  Header: {
    flex: 2,
    marginTop: 5,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  GroupNumber: {
    color: 'white',
    fontSize: 18,
  },
  DayOfWeek: {
    color: '#8e8e96',
    fontSize: 24,
  },
  DayOfTheMonth: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#212121',
    margin: 15,
    borderRadius: 50,
  },
  container: {
    flex: 12,
    backgroundColor: '#212121',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
  },
});
