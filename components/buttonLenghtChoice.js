import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Button used to choose the story's length
class ButtonLengthChoice extends React.Component {
  //Get the story's length and style using props of our component is LengthChoice
  constructor(props) {
    super(props);
    this.state={
      //styleStoryVar come from our ButtonStyleChoice component
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
