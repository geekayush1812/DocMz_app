import React, {useState} from 'react';
import {View, Text} from 'react-native';
import GradientTopNavBar from '../../../../components/molecules/TopNavBar/GradientTopNavBar';
import NotFound from '../../../../components/organisms/NotFound/NotFound';

const Settings = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Setting'}
      />
      {isEmpty ? <NotFound /> : <Text>Settings</Text>}
    </View>
  );
};

export default Settings;
