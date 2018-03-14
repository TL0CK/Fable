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
    var length = this.getStoryLength();
    var category = this.getStoryCategory();

    var listStories = fetch('http://127.0.0.1/edsa-fable/database/getStoriesIdByCategoryAndLength.php?category='+category+'&length='+length)
                      .then((response) => response.json())
                      .then((responseJson) => {
                        return responseJson.storyId;
                      })
                      .catch((error) => {
                        console.error(error);
                      });
    console.log(listStories);
    return listStories;
  }

  // Get a random ID in the list of ID
  // return an int
  getRandomIdStory(){
    var listStories = this.getStoriedListId();
    var randomId = listStories[Math.floor(Math.random()*listStories.length)];

    return randomId;
  }

  // Get story's text from the randomId we get earlier
  // return text
  getStoryText(){
    var randomId = this.getRandomIdStory();

    var storyText = fetch('http://127.0.0.1/edsa-fable/database/getStoryById.php?id='+randomId)
                    .then((response) => response.json())
                    .then((responseJson) => {
                      return responseJson.Texte;
                    })
                    .catch((error) => {
                      console.error(error);
                    });
    console.log(storyText);
    return storyText;
  }


  render() {
    this.getStoryText();
    console.log(this.props.navigation.state.params.categoryStory);
    console.log(this.props.navigation.state.params.lengthStory);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
      </View>
    );
  }
}


export default Story;
