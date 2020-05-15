import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DmzText from '../../atoms/DmzText/DmzText';
import DmzButton from '../../atoms/SwitchButton/SwitchButton';

function TimelineContent({
  Profile,
  PatientName,
  Timing,
  Age,
  Disease,
  onPressContinue,
  active,
}) {
  return (
    <>
      <View style={Styles.TimelineContent}>
        {active ? Profile : null}
        <View style={Styles.TimelineDetails}>
          <View style={Styles.TimelineNameContainer}>
            <DmzText text={PatientName} style={Styles.TimelineName} />
            <View style={[Styles.TimelineTime, {marginLeft: active ? 10 : 90}]}>
              <Text>{Timing}</Text>
            </View>
          </View>
          <Text style={Styles.TimelineAge}>{Age}</Text>
          <View style={Styles.TimelineDisease}>
            <Text style={Styles.TimelineDiseaseText}>{Disease}</Text>
          </View>
        </View>
      </View>
      {active === true ? (
        <DmzButton
          onPress={onPressContinue}
          icon={<FontAwesomeIcon name="arrow-right" size={18} color="#555" />}
          style={{Container: Styles.TimelineContinueButton}}
        />
      ) : null}
    </>
  );
}

const Styles = StyleSheet.create({
  TimelineContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TimelineDetails: {
    marginLeft: 10,
  },
  TimelineNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  TimelineName: {
    fontSize: 16,
    color: '#444',
  },
  TimelineTime: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  TimelineAge: {
    color: '#666',
  },
  TimelineDisease: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  TimelineDiseaseText: {
    padding: 2,
    borderRadius: 10,
    color: '#555',
    fontSize: 14,
  },
  TimelineContinueButton: {
    height: null,
    width: null,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 8,
    paddingRight: 18,
    paddingLeft: 18,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
  },
});
export default TimelineContent;
