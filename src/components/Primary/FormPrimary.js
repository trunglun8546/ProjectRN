import React, {Component} from 'react';
import {StyleSheet, 
        KeyboardAvoidingView, 
        TouchableOpacity, 
        Text, 
        Animated, 
        View,
        ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        this.buttonAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
    }

    _onPress() {     
        if (this.state.isLoading) return;    
        this.setState({isLoading: true});
    
        setTimeout(() => {
          Actions.signUpScreen();
          this.setState({isLoading: false});
          this.buttonAnimated.setValue(0);
        }, 50);
    }

    _onPressLogin() {     
        if (this.state.isLoading) return;    
        this.setState({isLoading: true});
    
        setTimeout(() => {
          Actions.loginScreen();
          this.setState({isLoading: false});
          this.buttonAnimated.setValue(0);
        }, 50);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPress}
                        activeOpacity={1}>                    
                        <Text style={styles.text}>ĐĂNG KÍ MỚI</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPressLogin}
                        activeOpacity={1}>                    
                        <Text style={styles.text}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    top: '-24.5%',
    left: 137,
  },
  container2: {
    flex: 1,
    alignItems: 'flex-end',
    top: '-74.4%',
    right: -505,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 0,
    zIndex: 100,
    width:364,
    height: 100,
    marginTop: 5,
    shadowColor: "#eee",
    shadowColor: "#eee",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderColor: 'green',
  },
  text: {
    color: '#081467',
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: "400",
    fontFamily: "sans-serif-medium",
  },
});