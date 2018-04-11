import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoadingScreen from './../components/loadingScreen';

class GetStoryText extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text : '',
      loading: true,
      RandomId: this.props.RandomId
    }
  }

  componentWillMount() {

    var that = this;
    var randomId = this.state.RandomId;

    console.log("randomId : " + randomId);

    var url = `http://192.168.1.19:80/edsa-fable/database/getStoryById.php?id=`+randomId;
    //var url = `http://192.168.1.74:80/edsa-fable/database/getStoryById.php?id=`+randomId;

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ text: data.text.toString() });
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{this.state.text}</Text>
        </View>
      );
    }
  }
}


  export default GetStoryText;
