import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import BottomNavigationComponent from '../../../components/old/BottomNavigation/BottomNavigation.component';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import {useSelector, useDispatch} from 'react-redux';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import TimelineContainer from '../../../components/molecules/TimelineContainer/TimelineContainer';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Appointments = ({navigation}) => {
  const {patient, isPatientAccountReducerLoading} = useSelector(
    state => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();
  const [timeline, setTimeline] = useState(-1);

  useEffect(() => {
    console.log('patient ' + patient);
    dispatch(GetPatientInfo(patient.id));
  }, []);

  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Appointment'}
      />
      {isPatientAccountReducerLoading ? (
        <ActivityIndicator />
      ) : patient.favourites.length <= 0 ? (
        <NotFound />
      ) : (
        <FlatList
          style={{backgroundColor: '#fff'}}
          onEndReached={() => console.log('rech end.......')}
          // data={patient.appointments}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({item}) => (
            <TimelineContainer
              PatientName={'Test'}
              Timing={'9:00 AM'}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setTimeline(item);
              }}
              Age={'21'}
              Disease={'Headache'}
              Profile
              active={item === timeline}
            />
          )}
        />
      )}
    </View>
  );
};

export default Appointments;
