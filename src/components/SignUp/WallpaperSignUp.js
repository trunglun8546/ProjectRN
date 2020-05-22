import React, {Component} from 'react';
import {StyleSheet, 
        ImageBackground} from 'react-native';
import bgSrc from '../images/wallpaper2.png';

export default class WallpaperSignUp extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
         {this.props.children}
       </ImageBackground> 
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});