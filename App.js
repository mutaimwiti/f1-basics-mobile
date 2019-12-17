import React from 'react';
import {View} from 'react-native';

import Title from "./src/Title";
import F1Image from "./src/F1Image";
import F12020Grid from "./src/F12020Grid";

import {image, drivers} from "./src/utils/data";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Title data={'Nico Hulkenberg'}/>
        <F1Image image={image}/>
        <Title data={'2019 Grid Drivers'}/>
        <F12020Grid drivers={drivers}/>
      </View>
    )
  }
}
