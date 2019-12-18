import React from 'react';
import {Text, YellowBox} from 'react-native'
import {View, ScrollView, StyleSheet} from 'react-native';

import Title from "./src/components/Title";
import Drivers from "./src/components/Drivers";
import Constructors from "./src/components/Constructors";
import DynamicImage from "./src/components/DynamicImage";

import {constructors, drivers} from "./src/utils/data";

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default class App extends React.Component {
  render() {
    return (
      <ScrollView styles={this.styles.root}>
        <Title data={'Formula 1'}/>
        <DynamicImage/>
        <Title data={'2020 Constructors'}/>
        <Constructors constructors={constructors}/>
        <Title data={'2020 Drivers'}/>
        <Drivers drivers={drivers}/>
        <View styles={this.styles.bottom}><Text/></View>
      </ScrollView>
    )
  }

  styles = StyleSheet.create({
    bottom: {
      marginBottom: 20
    }
  })
}
