import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GetStoryText from './../components/getStoryText';

class GetRandomStory extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      RandomStoryId: '',
      lengthStory: this.props.StoryLength,
      categoryStory: this.props.StoryCategory
    }
  }

  // Get the a list of id's using the category and length
  // get a random ID in list
  // return an int
  componentWillMount() {
    var that = this;
    var length = this.state.lengthStory;
    var category = this.state.categoryStory;

    console.log("length : " + length);
    console.log("category : " + category);


    var url = `http://192.168.1.19:80/edsa-fable/database/getStoriesIdByCategoryAndLength.php?category=`+category+`&length=`+length;

    console.log(url);

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      console.log("la liste d'id est : " + data.storiesId);
      that.setState({ RandomStoryId: data.storiesId[Math.floor(Math.random()*data.storiesId.length)] });
    });
  }


  render() {
    console.log(this.state.RandomStoryId)
    return (
      <GetStoryText RandomId='2' /> //{this.state.RandomStoryId}
    );
  }
}


  export default GetRandomStory;
