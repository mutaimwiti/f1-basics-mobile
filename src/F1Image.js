import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    const {image} = this.props;

    return <Image source={image} style={this.styles.image}/>;
  }

  styles = StyleSheet.create({
    image: {
      marginLeft: '5%',
      marginTop: '2%',
      width: '90%',
      aspectRatio: 1,
      borderRadius: 10
    }
  });
}
