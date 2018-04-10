import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GetStoryText from './../components/getStoryText';
import LoadingScreen from './../components/loadingScreen';

class GetRandomStory extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      RandomStoryId: '',
      loading: true,
      lengthStory: this.props.StoryLength,
      categoryStory: this.props.StoryCategory
    }
  }

  componentDidMount() {
    var that = this;
    var length = this.state.lengthStory;
    var category = this.state.categoryStory;

    console.log("length : " + length);
    console.log("category : " + category);


    var url = `http://192.168.1.19:80/edsa-fable/database/getStoriesIdByCategoryAndLength.php?category=`+category+`&length=`+length;

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
      that.setState({ loading: false });
    });
  }

  render() {
    const isLoading = this.state.loading;
    if (isLoading){
      return (
        <LoadingScreen/>
      );
    }
    else{
      return (
        <GetStoryText RandomId={this.state.RandomStoryId}/>
      );
    }
  }
}


  export default GetRandomStory;
