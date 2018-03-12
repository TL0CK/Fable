import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonStyleChoice from './../components/buttonStyleChoice';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ButtonStyleChoice styleStory='Epouvante' navigation={this.props.navigation}/>
        <ButtonStyleChoice styleStory='Aventure' navigation={this.props.navigation}/>
        <ButtonStyleChoice styleStory='Science-Fiction' navigation={this.props.navigation}/>
        <ButtonStyleChoice styleStory='Jeunesse' navigation={this.props.navigation}/>
        <ButtonStyleChoice styleStory='Erotique' navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default HomeScreen;
