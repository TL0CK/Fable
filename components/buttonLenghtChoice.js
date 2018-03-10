import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ButtonLengthChoice extends React.Component {
  render() {
    return (
      <Button
        title = {this.props.name}
        onPress={() => this.props.navigation.navigate('Story')}
      />
    );
  }
}

export default ButtonLengthChoice;
