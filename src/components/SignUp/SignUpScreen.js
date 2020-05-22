import React, {Component} from 'react';
import FormSignUp from './FormSignUp';
import WallpaperSignUp from './WallpaperSignUp';

export default class SignUpScreen extends Component {
  render() {
    return (
      <WallpaperSignUp>
        <FormSignUp/>
      </WallpaperSignUp>
    );
  }
}