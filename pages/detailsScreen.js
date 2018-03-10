import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LengthChoice extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home Now"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default LengthChoice;
