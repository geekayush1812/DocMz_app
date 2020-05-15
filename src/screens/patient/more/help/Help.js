import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NotFound from '../../../../components/organisms/NotFound/NotFound';
import GradientTopNavBar from '../../../../components/molecules/TopNavBar/GradientTopNavBar';

const Help = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Help'}
      />
      {isEmpty ? <NotFound /> : <Text>Help</Text>}
    </View>
  );
};

export default Help;
