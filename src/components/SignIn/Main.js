import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import SignUpScreen from '../SignUp/SignUpScreen';

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
	          hideNavBar={false}
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