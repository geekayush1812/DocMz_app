import {createStackNavigator} from 'react-navigation';

import Home from '../screens/doctor/home/Home';
import FindDoctor from '../screens/doctor/FindDoctor/FindDoctor';
import DoctorDetailsScreen from '../screens/doctor/DoctorDetail/DoctorDetail';
import Chats from '../screens/doctor/Chats/Chats';
import AtomExample from '../../example/atomExample';
import Medication from '../screens/examples/medication/Medication';
import Payments from '../screens/examples/payments/Payments';
import Collapsible from '../screens/examples/Collapsible/Collapsible';
import Login from '../screens/examples/Login/Login';
import Otp from '../screens/examples/OTP/Otp';
import Signup from '../screens/examples/Signup/Signup';
import ForgotPassword from '../screens/examples/ForgetPassword/ForgotPassword';
import VerticalSlider from '../screens/examples/VerticalSlider/VerticalSlider';
import DmzLogin from '../screens/examples/DmzLogin/DmzLogin';
import Expandable from '../screens/examples/Expandable/Expandable';
import Profile from '../screens/examples/Profile/Profile';
// import Login from '../screens/examples/Login/Login';
// import FallBg from '../screens/examples/FallBg/FallBg';
const DoctorNavigation = createStackNavigator(
  {
    homeScreen: Home,
    findDoctorScreen: FindDoctor,
    doctorDetail: DoctorDetailsScreen,
    chats: Chats,
    // testing: Expandable,
    // testing: DmzLogin,
    // testing: VerticalSlider,
    // testing: ForgotPassword,
    // testing: Otp,
    // testing: Signup,
    // testing: Login,
    // testing: Collapsible,
    // testing: Payments,
    // testing: Medication,
    // testing: AtomExample,
    testing: Profile,
  },
  {
    initialRouteName: 'testing',
    headerMode: 'none',
  },
);

export default DoctorNavigation;
