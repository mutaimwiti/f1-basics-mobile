import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import F12020Grid from "./src/F12020Grid";
import {image, drivers} from "./src/utils/data";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={this.styles.title}>Nico Hulkenberg</Text>
        <Image source={image} style={this.styles.image}/>
        <Text style={this.styles.title}>2019 Grid Drivers</Text>
        <F12020Grid drivers={drivers}/>
      </View>
    )
  }

  styles = StyleSheet.create({
    title: {
      marginTop: '5%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
    },
    image: {
      marginLeft: '5%',
      marginTop: '2%',
      width: '90%',
      aspectRatio: 1,
      borderRadius: 10
    }
  });
}
