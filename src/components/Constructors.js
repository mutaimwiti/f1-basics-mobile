import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';

import Title from "./Title";
import {constructors} from '../utils/data';

export default class Constructors extends React.Component {
  render() {
    const {filter} = this.props;

    const items = constructors.filter(constructor => {
      return constructor.name.toLowerCase().includes(filter.toLowerCase());
    });

    return <View style={this.styles.view}>
      <Title data={'Constructors'}/>
      {
        items.length ?
          <FlatList
            style={this.styles.list}
            data={items}
            renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
          :
          <Text>No results</Text>
      }

    </View>
  }

  styles = StyleSheet.create({
    list: {
      marginTop: '5%',
    },
    view: {
      marginLeft: '5%',
    },
    item: {
      fontWeight: 'bold',
    }
  });
}
