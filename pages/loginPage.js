import React, { Component } from "react";
import { ScrollView, Text, View, Button, TextInput } from 'react-native';

import ButtonStyleChoice from './../components/buttonStyleChoice';
import HomeScreen from './homePage';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogged: false
    };
  }

  sendRequestPost() {
    var that = this;

    var user = that.state.username;
    var pass = that.state.password;

    var details = {
      'username': user,
      'password': pass,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    console.log(formBody);

    var url = `http://192.168.1.19:80/edsa-fable/database/getUserIsGranted.php`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function() {
      that.setState({ isLogged: true });
    })
    .done();
  }

  render() {
    if(!this.state.isLogged){
      return (
        <ScrollView style={{padding: 20}}>
          <Text
              style={{fontSize: 27}}>
              Login
          </Text>
          <TextInput
            placeholder='Username'
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            placeholder='Password'
            onChangeText={(password) => this.setState({password})}
          />
          <View style={{margin:7}} />
          <Button
            disabled={this.state.isLogged||!this.state.username||!this.state.password}
            onPress={() => {
              this.sendRequestPost
              this.setState({ isLogged: true })
            }}
            title="Submit"
          />
        </ScrollView>
      );
    }
    else{
      return(
        <Button
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          title="Bienvenue"
        />

      );
    }
  }
}
