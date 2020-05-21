import React, {Component} from 'react';
import {StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity,} from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        if(this.state.press == true){         
           this.setState({showPass: true});
           this.setState({press: false});
        }
        else{
            this.setState({showPass: false});
            this.setState({press: true});
        }            
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <UserInput
                    source={usernameImg}
                    placeholder="Tài khoản"                    
                    autoCorrect={false}
                />
                <UserInput
                    source={passwordImg}
                    secureTextEntry={this.state.showPass}
                    placeholder="Mật khẩu"
                    autoCorrect={false}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.iconEye} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 410,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});