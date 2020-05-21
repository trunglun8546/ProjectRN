import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export default class WallpaperSignUp extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture}>
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
    backgroundColor: '#fff'
  },
});