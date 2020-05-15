import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import AuthNavigation from './AuthNavigation';
import PatientNavigation from './PatientNavigation';
import DoctorNavigation from './DoctorNavigaton';
import DocProfileLite from '../screens/patient/docProfileLite/DocProfileLite';
import AppointmentForm from '../screens/patient/appointmentForm/AppointmentForm';
import ConfirmAppointment from '../components/molecules/ConfirmAppointment/ConfirmAppointment';
// import Questionnaire from '../screens/patient/questionnaire/Questionnaire';
import BookingDetails from '../screens/patient/questionnaire/BookingDetails';
import NewQuestionnaire from '../screens/patient/questionnaire/NewQuestionnaire';
import SelectFiles from '../screens/patient/questionnaire/SelectFiles';
import { useSelector } from 'react-redux';

// check for login status
const isDoctorLogin = false;
// const {isDoctor, isLogedin} = useSelector(state => state.AuthReducer)

const PageNavigation = createSwitchNavigator(
  {
    patientHomePage: PatientNavigation,
    doctorHomePage: DoctorNavigation,
  },
  {
    initialRouteName: isDoctorLogin ? 'doctorHomePage' : 'patientHomePage',
    // initialRouteName: 'doctorHomePage',
    headerMode: 'none',
  },
);

const docMainStream = createStackNavigator(
  {
    AppointmentsStack: {
      screen: DocProfileLite,
    },
    ConfirmAppointment,
    AppointmentForm,
    ConfirmAppointment,
    AppointmentForm,
    // Questionnaire,
  },
  {
    initialRouteName: 'AppointmentsStack',
    headerMode: 'none',
  },
);

const questionnaire = createStackNavigator(
  {
    BookingDetails,
    NewQuestionnaire,
  },
  {
    initialRouteName: 'BookingDetails',
    headerMode: 'none',
  },
);

const MainNavigation = createStackNavigator(
  {
    authentication: AuthNavigation,
    pageNavigation: PageNavigation,
    docPatientStrem: docMainStream,
    question: questionnaire,
    selectFiles: SelectFiles,
  },
  {
    initialRouteName: 'pageNavigation',
    headerMode: 'none',
  },
);

export default MainNavigation;
