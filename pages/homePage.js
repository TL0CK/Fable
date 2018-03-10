import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonStyleChoice from './../components/buttonStyleChoice'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ButtonStyleChoice name='Epouvante' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Aventure' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Science-Fiction' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Jeunesse' navigation={this.props.navigation}/>
        <ButtonStyleChoice name='Erotique' navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default HomeScreen;
