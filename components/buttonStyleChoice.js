import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ButtonStyleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      styleStoryVar: this.props.styleStory
    }
  }

  render () {
    return (
      <Button
        title = {this.props.styleStory}
        onPress={() => this.props.navigation.navigate('Length', { styleStoryVar: this.state.styleStoryVar })}
      />
    );
  }
}


export default ButtonStyleChoice;
