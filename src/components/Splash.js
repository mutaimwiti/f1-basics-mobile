import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import {images} from "../utils/data";
import Title from "./Title";

const TIMEOUT = 2000;

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: {uri: this.getRandomImage()}};
  }

  render() {
    const {current} = this.state;

    return <View style={this.styles.view}>
      <Title data={'Formula 1'}/>
      <Image source={current} style={this.styles.image}/>
    </View>;
  }

  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        this.setState({current: {uri: this.getRandomImage()}})
      }, TIMEOUT);
    }, TIMEOUT);
  }

  getRandomImage = () => {
      return images[Math.floor(Math.random() * images.length)]
  };

  styles = StyleSheet.create({
    view: {
      marginLeft: '5%'
    },
    image: {
      marginTop: 10,
      width: '95%',
      aspectRatio: 1,
      borderRadius: 10
    }
  });
}
