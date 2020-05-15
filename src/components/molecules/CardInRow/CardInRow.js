import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function CardInRow({children, style}) {
  return (
    <ScrollView horizontal={true} style={[Styles.Container, style ? style : null]}>{children}</ScrollView>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-between',
    
    marginBottom: 15,
  },
});

export default CardInRow;
