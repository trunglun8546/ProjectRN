import React, {Component} from 'react';
import {StyleSheet, 
        Image, 
        KeyboardAvoidingView, 
        TouchableOpacity, 
        Text, 
        Animated, 
        View, 
        Alert, 
        TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

const MARGIN = 40;
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
		    password: '',
            isLoading: false,
            showPass: true,
            press: false,
        };
        this.buttonAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
        this.showPass = this.showPass.bind(this);
    }

    _onPress() {
        const {username, password} = this.state
        if(username == 'trung' && password == '123') {
        
        if (this.state.isLoading) return;    
        this.setState({isLoading: true});
    
        setTimeout(() => {
          Actions.homeScreen();
          this.setState({isLoading: false});
          this.buttonAnimated.setValue(0);
          // Alert.alert('Đăng nhập thành công!', 'Đã đăng nhập hệ thống quyền admin system');
        }, 50);
        
        }
        else {
            Alert.alert('Thất bại!', 'Sai tài khoản hoặc mật khẩu');
        }
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
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
                <View style={styles.inputWrapper}>
                <Image source={usernameImg} style={styles.inlineImg} />
                    <TextInput
                        style={styles.input}
                        source={usernameImg}
                        placeholder="Tài khoản"                    
                        autoCorrect={false}
                        onChangeText={val => this.onChangeText('username', val)}
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputWrapper}>
                <Image source={passwordImg} style={styles.inlineImg} />
                    <TextInput
                        style={styles.input}
                        source={passwordImg}
                        secureTextEntry={this.state.showPass}
                        placeholder="Mật khẩu"
                        autoCorrect={false}
                        onChangeText={val => this.onChangeText('password', val)}
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.iconEye} />
                </TouchableOpacity>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1}>                    
                        <Text style={styles.text}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
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
    top: 126,
    right: 410,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  container2: {
    flex: 1,
    top: -30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    right:0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#215fd0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
    width:500,
    height: 45,
    marginTop: 120,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: "700",
    fontSize:18,
  },
  image: {
    width: 24,
    height: 24,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 45,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
    width: 500,
    fontSize:18,
    marginTop: 20,
    fontWeight: "700",
    fontSize:18,
  },
  inputWrapper: {
    top:30,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 31,
  },
});