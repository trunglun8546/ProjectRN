import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';

import PrimaryScreen from './components/Primary/PrimaryScreen';
import LoginScreen from './components/SignIn/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import SignUpScreen from './components/SignUp/SignUpScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
		    <Scene key="primaryScreen"
	          component={PrimaryScreen}
	          hideNavBar={true}
	        />
	        <Scene key="loginScreen"
	          component={LoginScreen}
	          hideNavBar={true}
	        />
	        <Scene key="signUpScreen"
	          component={SignUpScreen}
	          hideNavBar={true}
	        />
			  <Scene key="homeScreen"
	          component={HomeScreen}
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}