import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import GarageButton from './components/GarageButton/index.js';
import gpio from './components/GarageButton/gpio.js'

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <GarageButton color='green' event={gpio}/>
      <GarageButton color='red' event={gpio}/>
      <StatusBar style="auto"/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#454343',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
