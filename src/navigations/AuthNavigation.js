import {createStackNavigator} from 'react-navigation';

import Login from '../screens/authentication/login/Login';
import Signup from '../screens/authentication/signup/Signup';

const AuthNavigation = createStackNavigator(
  {
    loginScreen: Login,
    signupScreen: Signup,
  },
  {
    initialRouteName: 'signupScreen',
    headerMode: 'none',
  },
);

export default AuthNavigation;
