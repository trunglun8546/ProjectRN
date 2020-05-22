import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import WallpaperHome from './WallpaperHome';
import arrowImg from '../images/left-arrow.png';
import Urf from '../images/wallpaper3.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    setTimeout(() => {
      Actions.loginScreen();
    }, 400);
  }

  render() {
    return (
      <WallpaperHome>
        {/* <View style={styles.container2}>
          <Image style={styles.picture} source={Urf}/>
            <TouchableOpacity
              style={styles.button2}
              onPress={this._onPress}
              activeOpacity={1}>                    
              <Text style={styles.text}>Quét vân tay</Text>
            </TouchableOpacity>
       </View> */}
       <View style={styles.container}>
         <TouchableOpacity
           onPress={this._onPress}
           style={styles.button}
           activeOpacity={1}>
           <Image style={styles.image} source={arrowImg} />
         </TouchableOpacity>
        </View>
      </WallpaperHome>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#215fd0',
  },
  image: {
    width: 24,
    height: 24,
  },
  container2: {
    flex: 1,
    margin: 20,
  },
  picture: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderLeftWidth: 200,
    borderTopWidth: 200,
    marginTop: "15%",
    marginLeft: "10%",
  },
  button2: {
    position: "absolute",
    top: 365,
    left: 255,
  },
  text: {
    color: "black",
    fontSize: 26,
    fontWeight: "700",
  }
});