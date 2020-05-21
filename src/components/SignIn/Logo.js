import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image}/>
                <Text style={styles.text}>PROJECT DEMO</Text>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          },
          image: {
            
          },
          text: {
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            marginTop: 20,
            fontSize:22,
          },
    });