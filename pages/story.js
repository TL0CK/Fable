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
  getStoryCategory(){
    return this.props.navigation.state.params.categoryStory;
  }

  // Get the a list of id's using the category and length
  // return an array
  getStoriedListId(){
    var lenght = getStoryLength();
    var category = getStoryCategory();

    var listStories = /* GET REQUEST */'';
    // je suis obligé de mettre des '' sinon le code js ne compile pas
    // il faudra remplacer ça plus tard

    return listStories;
  }

  // Get a random ID in the list of ID
  // return an int
  getRandomIdStory(){
    var listStories = getStoriedListId();
    var randomId = listStories[Math.floor(Math.random()*listStories.length)];

    return randomId;
  }

  // Get story's text from the randomId we get earlier
  // return text
  getStoryText(){
    var randomId = getRandomIdStory();

    var storyText = /* GET REQUEST */'';
    // je suis obligé de mettre des '' sinon le code js ne compile pas
    // il faudra remplacer ça plus tard

    return storyText;
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
