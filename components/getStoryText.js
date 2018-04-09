import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class GetStoryText extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text : '',
      RandomId: this.props.RandomId
    }
  }

  // Get story's text from the randomId we get earlier
  // return text
  componentDidMount() {
    var that = this;
    var randomId = this.state.RandomId;

    console.log("randomId : " + randomId);

    var url = `http://192.168.1.19:80/edsa-fable/database/getStoryById.php?id=`+randomId;

    console.log("url : " + url);

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ text: data.text.toString() });
    });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}


  export default GetStoryText;
