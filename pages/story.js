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

    var url = `http://192.168.43.47:80/edsa-fable/database/getStoriesIdByCategoryAndLength.php?category=`+category+`&length=`+length;

    var listStories = fetch(url)
                      .then(function(response){
                        return response.json();
                      })
                      .then(function(data) {
                        return data.storiesId;
                      })
                      .catch((error) => {
                        console.error(error);
                      });

    return listStories;
  }

  // Get a random ID in the list of ID
  // return an int
  getRandomIdStory(){
    var randomId = this.getStoriedListId()
                  .then(function(data){
                    console.log("la liste d'id est : " + data);
                    var randomId = data[Math.floor(Math.random()*data.length)];
                    return randomId;
                  });
    return randomId;
  }

  // Get story's text from the randomId we get earlier
  // return text
  getStoryText(){
    var text = this.getRandomIdStory()
                  .then(function(data){
                    var url = `http://192.168.43.47:80/edsa-fable/database/getStoryById.php?id=`+data;

                    var storyText = fetch(url)
                                    .then(function(response) {
                                      return response.json();
                                    })
                                    .then(function(data) {
                                      return data.text;
                                    })
                                    .catch((error) => {
                                      console.error(error);
                                    });
                    return storyText;
                  })
    return text;
  }


  render() {
    var textStory = this.getStoryText()
                    .then(function(data){
                      // Ce console log nous donne bien le corps du texte !!!!!!!!
                      console.log(data);
                    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
      </View>
    );
  }
}


export default Story;
