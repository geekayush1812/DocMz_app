import React, {useState} from 'react';
import {View, Text} from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import NotFound from '../../../components/organisms/NotFound/NotFound';

const Orders = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <View>
      <GradientTopNavBar
        navigation={navigation}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'Order'}
      />
      {isEmpty ? <NotFound /> : <Text>Orders</Text>}
    </View>
  );
};

export default Orders;
