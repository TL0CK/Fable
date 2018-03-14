import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Get the text of the story
class StoryText extends React.Component {
  //we get the story's style using props of our component is HomeScreen
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
