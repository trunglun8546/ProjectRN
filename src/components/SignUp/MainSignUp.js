import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
  } from 'react-native';


export default class MainSignUp extends Component {
  render() {
	  return (
		<View style={styles.container}>
			<Text style={styles.text}>Đăng kí tài khoản Admin</Text>
		</View>
	  );
	}
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  top: 0,
	  alignItems: 'center',
	  justifyContent: 'flex-start',
	  right: 0,
	},
	text: {
	  color: 'black',
	  backgroundColor: 'transparent',
	},
	image: {
	  width: 24,
	  height: 24,
	},
  });