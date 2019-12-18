import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {onChange} = this.props;

    return <View style={this.styles.view}>
      <TextInput
        style={this.styles.input}
        placeholder="Search here"
        onChangeText={(text) => onChange(text)}
      />
    </View>;
  }

  styles = StyleSheet.create({
    input: {
      height: 50,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10
    },
    view: {
      marginTop: 15,
      marginLeft: '5%',
      marginRight: '5%',
    }
  })
}
