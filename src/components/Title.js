import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    const {data} = this.props;

    return <Text style={this.styles.title}>{data}</Text>;
  }

  styles = StyleSheet.create({
    title: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 20
    }
  });
}
