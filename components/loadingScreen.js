import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./../images/logoF.png')}/>
      </View>
    );
  }
}

export default LoadingScreen;
