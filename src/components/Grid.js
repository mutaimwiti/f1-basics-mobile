import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';

export default class Grid extends React.Component {
  render() {
    const {drivers} = this.props;

    const firstTen = drivers.slice(0, 9);
    const lastTen = drivers.slice(10, 19);


    return <View style={this.styles.view}>
      <FlatList
        style={this.styles.list}
        data={firstTen}
        renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
      <FlatList
        style={this.styles.list}
        data={lastTen}
        renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
    </View>;
  }

  styles = StyleSheet.create({
    view: {
      flexDirection: 'row'
    },
    list: {
      marginLeft: '10%',
      marginTop: '5%',
    },
    item: {
      fontWeight: 'bold',
    }
  });
}
