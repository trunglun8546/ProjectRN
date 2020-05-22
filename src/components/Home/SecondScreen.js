import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import WallpaperHome from './WallpaperHome';

import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    setTimeout(() => {
      Actions.loginScreen();
    }, 500);
  }

  render() {
    return (
      <WallpaperHome>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPress}
          style={styles.button}
          activeOpacity={1}>
          <Image style={styles.image} source={arrowImg} />
        </TouchableOpacity>
      </View>
      </WallpaperHome>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});