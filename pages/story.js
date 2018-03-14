import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Story extends React.Component {
  // Get the story's length
  // return a string : S , M , L , XL
  getStoryLength(){
    return this.props.navigation.state.params.lengthStory;
  }

  // Get the story's style
  // return a string
  getStoryStyle(){
    return this.props.navigation.state.params.categoryStory;
  }


  render() {
    console.log(this.props.navigation.state.params.categoryStory);
    console.log(this.props.navigation.state.params.lengthStory);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}

export default Story;
