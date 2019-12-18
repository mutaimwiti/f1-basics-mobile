import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {images} from "../utils/data";

const TIMEOUT = 2000;

export default class DynamicImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: {uri: this.getRandomImage()}};
  }

  render() {
    const {current} = this.state;

    return <Image source={current} style={this.styles.image}/>;
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
    image: {
      marginLeft: '5%',
      marginTop: '2%',
      width: '90%',
      aspectRatio: 1,
      borderRadius: 10
    }
  });
}
