import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import { useSelector, useDispatch } from 'react-redux';
import { GetPatientInfo } from '../../../redux/action/patientAccountAction';

const FamilyMember = ({ navigation }) => {
  // const { patient, isPatientAccountReducerLoading } = useSelector(
  //   state => state.PatientAccountReducer,
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(GetPatientInfo(patient.id));
  }, []);

  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'My Doctor'}
      />
      <Text>
        1. list of family member
        2. add family member then it will show a popup/model
      </Text>
    </View>
  );
};

export default FamilyMember;
