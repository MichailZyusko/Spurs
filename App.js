/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import SettingsScreen from './Screens/Settings.js';
import ScheduleScreen from './Screens/Schedule.js';
import FilesScreen from './Screens/Files.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#212121',
        inactiveBackgroundColor: '#212121',
      }}>
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: () => <Icon name="bars" size={30} color="#8e8e96" />,
        }}
      />
      <Tab.Screen
        name="Files"
        component={FilesScreen}
        options={{
          tabBarLabel: 'Files',
          tabBarIcon: () => <Icon name="laptop" size={30} color="#8e8e96" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Icon name="setting" size={30} color="#8e8e96" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer styles={styles.TabBar}>
      <MyTabs styles={{backgroundColor: 'red'}} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    flex: 1,
    backgroundColor: '#212121',
  },
});
