import React, {Component} from 'react';
import MainSignUp from './MainSignUp';
import WallpaperSignUp from './WallpaperSignUp';

export default class SignUpScreen extends Component {
  render() {
    return (
      <WallpaperSignUp>
        <MainSignUp/>
      </WallpaperSignUp>
    );
  }
}