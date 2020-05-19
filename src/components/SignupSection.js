import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textleft}>Create Password</Text>
                <Text style={styles.textright}>Forgot Password?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textleft: {
    color: 'white',
    backgroundColor: 'transparent',
    left:140,
    fontSize:16,
  },
  textright: {
    color: 'white',
    backgroundColor: 'transparent',
    right:140,
    fontSize:16,
  },
});