import React from 'react';
import {YellowBox, ScrollView, StyleSheet} from 'react-native';

import Search from "./src/components/Search";
import Splash from "./src/components/Splash";
import Drivers from "./src/components/Drivers";
import Constructors from "./src/components/Constructors";

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
