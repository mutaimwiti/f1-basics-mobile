import React from 'react';
import {View} from 'react-native';

import Grid from "./src/components/Grid";
import Title from "./src/components/Title";
import F1Image from "./src/components/Photo";

import {image, drivers} from "./src/utils/data";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Title data={'Formula 1'}/>
        <F1Image image={image}/>
        <Title data={'2020 Grid'}/>
        <Grid drivers={drivers}/>
      </View>
    )
  }
}
