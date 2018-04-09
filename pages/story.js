import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GetRandomStory from './../components/getRandomStory'

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lengthStory: this.props.navigation.state.params.lengthStory,
      categoryStory: this.props.navigation.state.params.categoryStory
    }
  }

  render() {
    console.log(this.state.lengthStory)
    console.log(this.state.categoryStory)
    return (
      <GetRandomStory StoryLength={this.state.lengthStory} StoryCategory={this.state.categoryStory}/>
    );
  }
}


export default Story;
