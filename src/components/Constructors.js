import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

export default class Constructors extends React.Component {
  render() {
    const {constructors} = this.props;

    return <FlatList
      style={this.styles.list}
      data={constructors}
      renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
  }

  styles = StyleSheet.create({
    list: {
      marginLeft: '10%',
      marginTop: '5%',
    },
    item: {
      fontWeight: 'bold',
    }
  });
}
