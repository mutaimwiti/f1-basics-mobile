import React from 'react';
import {YellowBox, ScrollView, StyleSheet} from 'react-native';

import Title from "./src/components/Title";
import Search from "./src/components/Search";
import Drivers from "./src/components/Drivers";
import Constructors from "./src/components/Constructors";
import Splash from "./src/components/Splash";

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  render() {
    const {search} = this.state;

    return (
      <ScrollView style={this.styles.root}>
        <Splash/>
        <Search onChange={(search) => this.setState({search})}/>
        <Constructors filter={search}/>
        <Drivers filter={search}/>
      </ScrollView>
    )
  }

  styles = StyleSheet.create({
    root: {
      marginBottom: 20
    }
  })
}
