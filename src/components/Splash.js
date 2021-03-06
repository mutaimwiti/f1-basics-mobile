import React from 'react';
import { Button } from 'react-native-elements';
import {StyleSheet, Image, View} from 'react-native';

import Title from "./Title";
import {images} from "../utils/data";

const TIMEOUT = 10000;

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
      <View>
        <Button
          buttonStyle={this.styles.button}
          title='Random Image'
          onPress={() => this.setRandomImage()}/>
      </View>
    </View>;
  }

  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        this.setRandomImage();
      }, TIMEOUT);
    }, TIMEOUT);
  }

  setRandomImage = () => {
    this.setState({current: {uri: this.getRandomImage()}})
  };

  getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)]
  };

  styles = StyleSheet.create({
    button: {
      backgroundColor: '#ff1801',
      borderRadius: 5,
      marginTop: 10,
      width: '95%',
    },
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
