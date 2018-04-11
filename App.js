import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './pages/homePage';
import LengthChoice from './pages/lengthChoice';
import Story from './pages/story';
import Login from './pages/loginPage';

const RootStack = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: HomeScreen },
    Length: { screen: LengthChoice },
    Story: { screen: Story },
  },
  {
    initialRouteName: 'Login',
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
