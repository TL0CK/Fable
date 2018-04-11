import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Button used to choose the story's length
class ButtonHomeScreen extends React.Component {
  render() {
    return (
      <Button
        title = {this.props.name}
        onPress={() => this.props.navigation.navigate('Home')}
      />
    );
  }
}

export default ButtonHomeScreen;
