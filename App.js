import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    const image = {uri: 'https://www.formula1.com/content/dam/fom-website/manual/XPB_Images/XPB_1025389_HiRes.jpg.transform/9col/image.jpg'};

    return (
      <View>
        <Text style={this.styles.title}>Nico Hulkenberg</Text>
        <Image source={image} style={this.styles.image}/>
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
