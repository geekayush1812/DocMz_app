import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import DmzText from '../../atoms/DmzText/DmzText';
import PropType from 'prop-types';
import {TextInput} from 'react-native-gesture-handler';
/**
 *
 * @param {String} textContentType content type of the input
 * @param {String} placeholder placeholder for the input
 * @param {String} keyboardType keyboard type of the input {default:'default'}
 * @param {Boolean} withAnim whether animatable or not {default:true}
 * @param {Object} style custom styles
 * @param {function} inputHandler
 *
 */

function AnimInput(props) {
  const placeholderTranslate = useRef(new Animated.Value(0)).current;
  const [inputText, setInputText] = useState('');
  const {
    textContentType,
    placeholder,
    keyboardType = 'default',
    withAnim = true,
    style,
    inputHandler
  } = props;
  const onFocus = () => {
    Animated.timing(placeholderTranslate, {
      toValue: 1,
      easing: Easing.elastic(),
      duration: 500,
    }).start();
  };
  const onBlur = () => {
    if (inputText === '') {
      Animated.timing(placeholderTranslate, {
        toValue: 0,
        easing: Easing.elastic(),
        duration: 500,
      }).start();
    }
  };
  const customContainerStyle = [
    Styles.Container,
    style ? style.Container : null,
  ];
  const customAnimatedPlaceholderStyle = [
    Styles.PlaceholderText,
    {
      transform: [
        {
          translateY: placeholderTranslate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -20],
          }),
        },
        {
          translateX: placeholderTranslate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -5],
          }),
        },
      ],
    },
    style ? style.Placeholder : null,
  ];
  const customInputStyle = [Styles.Input, style ? style.Input : null];

  return (
    <View style={customContainerStyle}>
      {withAnim ? (
        <Animated.Text style={customAnimatedPlaceholderStyle}>
          {placeholder}
        </Animated.Text>
      ) : null}
      <TextInput
        textContentType={textContentType}
        placeholder={withAnim ? '' : placeholder}
        keyboardType={keyboardType}
        style={customInputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={text => inputHandler(text)}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  PlaceholderText: {
    position: 'absolute',
    left: 10,
    color: '#777',
  },
  Input: {
    left: 10,
  },
});

// AnimInput.prototype = {
//   textContentType: PropType.string,
//   placeholder: PropType.string,
//   keyboardType: PropType.string,
//   withAnim: PropType.bool,
// };
export default AnimInput;
