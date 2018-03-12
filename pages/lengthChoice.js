import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonLengthChoice from './../components/buttonLenghtChoice';

class LengthChoice extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ButtonLengthChoice
          name='5 min'
          length='S'
          navigation={this.props.navigation}
        />
        <ButtonLengthChoice
          name='10 min'
          length='M'
          navigation={this.props.navigation}
        />
        <ButtonLengthChoice
          name='15 min'
          length='L'
          navigation={this.props.navigation}
        />
        <ButtonLengthChoice
          name='20 min'
          length='XL'
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default LengthChoice;
