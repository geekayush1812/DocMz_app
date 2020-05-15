import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import {useSelector, useDispatch} from 'react-redux';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';

const MyDoctors = ({navigation}) => {
  const {patient, isPatientAccountReducerLoading} = useSelector(
    state => state.PatientAccountReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPatientInfo(patient.id));
  }, []);

  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'My Doctor'}
      />
      {isPatientAccountReducerLoading ? (
        <ActivityIndicator />
      ) : patient.favourites.length <= 0 ? (
        <NotFound />
      ) : (
        <FlatList
          onEndReached={() => console.log('rech end.......')}
          data={patient.favourites}
          renderItem={item => (
            // <AvailDoctorContainer
            //   data={item}
            //   navigation={navigation}
            //   onPress={() => onPress(item._id)}
            //   id={item._id}
            //   name={(item.basic.first_name + ' ' + item.basic.last_name)
            //     .slice(0, 15)
            //     .concat('...')}
            //   schedule={item.output.filter(
            //     o => o.bookedFor.slice(0, 10) === '2020-05-07',
            //   )}
            // />
            <Text>{item.item}</Text>
          )}
        />
      )}
    </View>
  );
};

export default MyDoctors;
