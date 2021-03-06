import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image}/>
                <Text style={styles.text}>THÔNG TIN ĐĂNG NHẬP</Text>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -60,
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