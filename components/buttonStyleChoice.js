import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Button used to choose the story's style
class ButtonStyleChoice extends React.Component {
  //we get the story's style using props of our component is HomeScreen
  constructor(props) {
    super(props);
    this.state={
      categoryStory: this.props.category
    }
  }

  render () {
    return (
      <Button
        title = {this.props.name}
        onPress={() => this.props.navigation.navigate('Length', { categoryStory: this.state.categoryStory })}
      />
    );
  }
}


export default ButtonStyleChoice;
