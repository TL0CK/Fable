import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ButtonLengthChoice extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      styleStoryVar: this.props.navigation.state.params.styleStoryVar,
      lengthStory: this.props.length
    }
  }

  render() {
    return (
      <Button
        title = {this.props.name}
        onPress={() => this.props.navigation.navigate('Story' , { styleStoryVar: this.state.styleStoryVar , lengthStory: this.state.lengthStory })}
      />
    );
  }
}

export default ButtonLengthChoice;
