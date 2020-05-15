import React, {useState, useEffect, useRef, useCallback, Suspense} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import CalenderBlock from '../../atoms/CalenderBlock/CalenderBlock';
import calculateMonths from '../../../utils/calculateMonths';
import {months} from '../../../utils/Months';

const MountMonth = ({dayNdate, item}) => {
  return (
    <FlatList
      listKey={item.name + item.month}
      data={dayNdate}
      numColumns={7}
      keyExtractor={item => item.date.toString()}
      renderItem={({item}) => (
        <CalenderBlock
          style={{
            Container: {borderColor: 'rgba(0,0,0,0.1)', borderWidth: 0.2},
            Text: {fontWeight: '700'},
          }}
          text={item.date}
        />
      )}
    />
  );
};
function CalenderMonth({month, item}) {
  const [dayNdate, setdayNdate] = useState([]);
  const calculateMonthsOnMount = useCallback(() => {
    const arr = calculateMonths(month);
    const Timeout = setTimeout(() => {
      setdayNdate(arr);
    }, 100);
    return () => clearTimeout(Timeout);
  }, [dayNdate]);
  useEffect(calculateMonthsOnMount);
  return (
    <View style={MonthOfCalendarStyles.Container}>
      <View style={MonthOfCalendarStyles.Header}>
        <Text style={MonthOfCalendarStyles.HeaderText}>
          {months[item.month - 1].name} 2020
        </Text>
      </View>
      <View style={MonthOfCalendarStyles.ContentContainer}>
        <FlatList
          listKey={item.month.toString()}
          data={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
          numColumns={7}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => <CalenderBlock text={item} />}
        />
        <MountMonth dayNdate={dayNdate} item={item} />
      </View>
    </View>
  );
}

const MonthOfCalendarStyles = StyleSheet.create({
  Container: {
    height: 'auto',
    marginLeft: 20,
    marginRight: 20,
  },
  Header: {},
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  ContentContainer: {
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,0.08)',
  },
});
export default CalenderMonth;
