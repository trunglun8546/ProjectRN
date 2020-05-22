import React, {Component} from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	TouchableOpacity,
	Text,
  Animated,
  Image
} from 'react-native';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import building from '../images/building.png';
import human from '../images/human.png';
import email from '../images/email.webp';
import phone from '../images/phone.png';

import {Actions} from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

const MARGIN = 40;
export default class MainSignUp extends Component {
  constructor() {
    super();

    this.state = {
		username: '', 
		password: '', 
		email: '', 
		phone_number: '', 
		isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  _onPress() {
	const {username} = this.state
    if(username == 'trung'){
      Alert.alert('Đăng kí thành công!', 'Mời quý công ty dùng tài khoản vừa tạo để đăng nhập');
      if (this.state.isLoading) return;

      this.setState({isLoading: true});
      setTimeout(() => {
        Actions.loginScreen();
      }, 500);	  
    }
  }

  render() {
    return (
		<View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.title}>THÔNG TIN CÔNG TY</Text>
        <View style={styles.inputWrapper}>
        <Image source={building} style={styles.inlineImg} />
          <TextInput
              style={styles.input}
              placeholder="Tên công ty"                    
              autoCorrect={false}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
          />     
       </View>     
        <View style={styles.inputWrapper}>
        <Image source={human} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder='Người đại diện'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
        </View>
        <View style={styles.inputWrapper}>
        <Image source={email} style={styles.inlineImg} />
          <TextInput
              style={styles.input}
              placeholder="Email"                    
              autoCorrect={false}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
          />     
       </View>     
        <View style={styles.inputWrapper}>
        <Image source={phone} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder='Số điện thoại'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        </View>
        <Text style={styles.title2}>THÔNG TIN ACCOUNT SYSTEM</Text>
        <View style={styles.inputWrapper}>
        <Image source={usernameImg} style={styles.inlineImg} />
          <TextInput
              style={styles.input}
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
            placeholder='Mật khẩu'
            secureTextEntry={false}
            autoCapitalize="none"
            placeholderTextColor='white'
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>                   
            <Text style={styles.text}>Đăng kí</Text>
          </TouchableOpacity>          
        </View>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 45,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    fontWeight: "700",
    width: 500,
    fontSize:18,
    marginTop: 20,
  },
  inputWrapper: {
    top: 0,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 31,
  },
  container: {
    position: 'relative',
    marginLeft: '3%',
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 0,
    fontSize:22,
    marginLeft: '30%',
  },
  title2: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 100,
    fontSize:22,
    marginLeft: '20%',
  },
  container2: {
    flex: 1,
    top: -30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    right:23,
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
    marginTop: 60,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: "700",
    backgroundColor: 'transparent',
  },
})