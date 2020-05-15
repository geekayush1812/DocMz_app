import React from 'react';
import {View, StyleSheet, useWindowDimensions, Text} from 'react-native';
function CalenderBlock({style, text}) {
  const dimen = useWindowDimensions();
  return (
    <View
      style={[
        Styles.Container,
        style ? style.Container : null,
        {
          width: (dimen.width - 40) / 7,
          height: (dimen.width - 100) / 7,
        },
      ]}>
      <Text style={[Styles.Text, style ? style.Text : null]}>{text}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {fontWeight: '600'},
});

export default CalenderBlock;
