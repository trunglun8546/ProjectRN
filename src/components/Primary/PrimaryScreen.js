import React, {Component} from 'react';
import FormPrimary from './FormPrimary';
import WallpaperPrimary from './WallpaperPrimary';
import LogoPrimary from './LogoPrimary';

export default class PrimaryScreen extends Component {
  render() {
    return (
      <WallpaperPrimary>
        <LogoPrimary/>
        <FormPrimary/>
      </WallpaperPrimary>
    );
  }
}