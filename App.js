import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './pages/homePage';
import LengthChoice from './pages/detailsScreen';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Length: { screen: LengthChoice },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
