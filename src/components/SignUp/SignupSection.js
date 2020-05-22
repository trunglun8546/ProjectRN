import React, {Component} from 'react';
import {StyleSheet, 
        View, 
        Text, 
        Animated, 
        TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const MARGIN = 200;
export default class SignupSection extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    setTimeout(() => {
      Actions.signUpScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 200);
  }
    render() {
      const changeWidth = this.buttonAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [MARGIN, MARGIN],
      });
        return (
            <View style={styles.container}>
                <Animated.View style={{width: changeWidth}}>         
                <TouchableOpacity
                  style={styles.textleft}
                  onPress={this._onPress}
                  activeOpacity={1}>                 
                    <Text style={styles.text}>Đăng kí tài khoản</Text>
                </TouchableOpacity>
                </Animated.View>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
  },
  textleft: {
    color: 'white',
    backgroundColor: 'transparent',
    left:-185,
    fontSize:16,
    marginTop: 40,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    left: 40,
    fontSize:16,
  },
});