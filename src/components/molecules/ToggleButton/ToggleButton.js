import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToggleDot from '../../atoms/ToggleDot/ToggleDot';
function ToggleButton({text, style}) {
  return (
    <View style={[ToggleButtonStyles.Container, style ? style : null]}>
      <Text style={ToggleButtonStyles.Text}>{text}</Text>
      <ToggleDot />
    </View>
  );
}

const ToggleButtonStyles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 2,
    width: 70,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    color: '#6231CB',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
export default ToggleButton;
