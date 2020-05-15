import {createStackNavigator} from 'react-navigation';

// import Login from '../screens/authentication/login/Login';
import Signup from '../screens/authentication/signup/Signup';
import Login from '../screens/examples/DmzLogin/DmzLogin'

const AuthNavigation = createStackNavigator(
  {
    loginScreen: Login,
    signupScreen: Signup,
  },
  {
    initialRouteName: 'loginScreen',
    headerMode: 'none',
  },
);

export default AuthNavigation;
