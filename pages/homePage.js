import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonStyleChoice from './../components/buttonStyleChoice';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ButtonStyleChoice name='Epouvante' category='horror' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Aventure' category='adventure' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Science-Fiction' category='scifi' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Jeunesse' category='teen' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Erotique' category='adult' navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default HomeScreen;
