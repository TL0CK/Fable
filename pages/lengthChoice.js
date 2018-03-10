import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonLengthChoice from './../components/buttonLenghtChoice';

class LengthChoice extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ButtonLengthChoice name='5 min' navigation={this.props.navigation}/>
        <ButtonLengthChoice name='10 min' navigation={this.props.navigation}/>
        <ButtonLengthChoice name='15 min' navigation={this.props.navigation}/>
        <ButtonLengthChoice name='20 min' navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default LengthChoice;
