import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Title from "./src/components/Title";
import Photo from "./src/components/Photo";
import Drivers from "./src/components/Drivers";
import Constructors from "./src/components/Constructors";

import {image, constructors, drivers} from "./src/utils/data";

export default class App extends React.Component {
  render() {
    return (
      <View styles={this.styles.root}>
        <ScrollView>
          <Title data={'Formula 1'}/>
          <Photo image={image}/>
          <Title data={'2020 Constructors'}/>
          <Constructors constructors={constructors}/>
          <Title data={'2020 Drivers'}/>
          <Drivers drivers={drivers}/>
        </ScrollView>
      </View>
    )
  }

  styles = StyleSheet.create({
    root: {
      paddingBottom: '50%',
      marginBottom: '50%'
    }
  })
}
