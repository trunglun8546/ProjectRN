import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';

import LoginScreen from './components/SignIn/LoginScreen';
import SecondScreen from './components/Home/SecondScreen';
import SignUpScreen from './components/SignUp/SignUpScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	          hideNavBar={true}
	        />
	        <Scene key="signUpScreen"
	          component={SignUpScreen}
	          hideNavBar={true}
	        />
			  <Scene key="secondScreen"
	          component={SecondScreen}
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}