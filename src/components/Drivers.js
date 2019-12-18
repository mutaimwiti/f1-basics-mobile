import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';

import Title from "./Title";
import {drivers} from '../utils/data';

export default class Drivers extends React.Component {
  render() {
    const {filter} = this.props;

    const items = drivers.filter(driver => {
      return driver.name.toLowerCase().includes(filter.toLowerCase())
    });

    let firstTen, lastTen;

    if (items.length > 10) {
      firstTen = items.slice(0, 9);
      lastTen = items.slice(10, items.length - 1);
    } else {
      firstTen = items.slice(0, items.length);
      lastTen = [];
    }

    return <View style={this.styles.root}>
      <Title data={'Drivers'}/>
      {
        items.length ? <View style={this.styles.view}>
            <FlatList
              style={this.styles.list}
              data={firstTen}
              renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
            <FlatList
              style={this.styles.list}
              data={lastTen}
              renderItem={({item}) => <Text style={this.styles.item}>{item.name}</Text>}/>
          </View> :
          <Text>No results</Text>
      }
    </View>;
  }

  styles = StyleSheet.create({
    root: {
      marginLeft: '5%',
    },
    view: {
      flexDirection: 'row'
    },
    list: {
      marginTop: '5%',
    },
    item: {
      fontWeight: 'bold',
    }
  });
}
