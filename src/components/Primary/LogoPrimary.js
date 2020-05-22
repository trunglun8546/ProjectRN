import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class LogoPrimary extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image}/>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          },
    });