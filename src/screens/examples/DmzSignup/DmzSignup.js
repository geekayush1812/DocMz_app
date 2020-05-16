//#EB4B2B
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Animated,
  useWindowDimensions,
  Easing,
  SafeAreaView,
} from 'react-native';
import Toast from 'react-native-root-toast';
import {useDispatch, useSelector} from 'react-redux';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import GoogleIcon from '../../../assets/svg/google.svg';
import FacebookIcon from '../../../assets/svg/facebook.svg';
// import ExpandableButton from '../../../components/organisms/ExpandableButton/ExpandableButton';

import LoadingButton from '../../../components/atoms/LoadingButton/LoadingButton';

function DmzLogin(props) {
  //   const {signupAs = 'patient'} = props.navigation.state.params;
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    registration_number: '',
    specialty: '',
    basic: '',
    city: '',
    state: '',
    country: '',
    appointmentsString: '',
    phone: '',
    referralId: '',
  });
  const [loading, setLoading] = useState(true);
  const [isDoctor, setDoctor] = useState(false);
  //   const dispatch = useDispatch();
  const Dimen = useWindowDimensions();
  const screenWidth = Dimen.width;
  const screenHeight = Dimen.height;
  const [heightOffset, setHeightOffset] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;

  const onLayout = props => {
    if (heightOffset !== props.nativeEvent.layout.y)
      setHeightOffset(props.nativeEvent.layout.y);
  };

  const onPress = callback => {
    // Animated.timing(opacity, {
    //   toValue: 1,
    //   duration: 1000,
    //   delay: 200,
    //   easing: Easing.in(),
    //   useNativeDriver: false,
    // }).start(() => {
    //   callback();
    // });
  };

  return (
    <ScrollView style={{paddingTop: '5%', backgroundColor: '#fff'}}>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}>
        <View style={{flexDirection: 'row'}}>
          <DmzText
            text={'Signup as '}
            type={3}
            lite
            style={{color: '#EB4B2B'}}
          />
          {/* <DmzText text={loginAs} type={3} lite style={{marginLeft: 5}} /> */}
        </View>
      </Animated.View>
      <View
        onLayout={onLayout}
        style={{
          flex: 10,
          paddingTop: 0,
          //   backgroundColor: 'red',
        }}>
        <DmzText
          text="Welcome!"
          type={4}
          lite
          gap_small
          style={{marginLeft: 'auto', marginRight: 'auto'}}
        />
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Email"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, email: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Password"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, password: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Fist Name"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, firstName: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Last Name"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, lastName: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Registration Number"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, registration_number: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Specialty"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, specialty: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Basic"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, basic: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="City"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, city: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="State"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, state: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Country"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, country: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Appointments"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, appointmentsString: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Phone"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, phone: txt})}
          />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            opacity: opacity.interpolate({
              inputRange: [0, 0.8, 1],
              outputRange: [1, 0, 0],
            }),
            marginBottom: 20,
          }}>
          <AnimInput
            withAnim={false}
            placeholder="Referer"
            style={{Container: {borderBottomWidth: 0, height: 40}}}
            inputHandler={txt => setData({...data, referralId: txt})}
          />
        </Animated.View>

        {/* <ExpandableButton
          width={screenWidth * 0.8}
          height={52}
          expandedHeight={screenHeight * 0.8}
          expandedTop={heightOffset}
          expandedWidth={screenWidth}
          onPress={onPress}
          buttonText={
            <DmzText
              text="Login"
              type={3}
              gap_small
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#f1f1f1',
              }}
            />
          }
        /> */}

        <LoadingButton
          //   isLoading={authData.isLoading}
          text={'Signup'}
          onClick={() => {}}
        />
      </View>
      <Animated.View
        style={{
          flex: 2,
          padding: 25,
          alignItems: 'center',
          opacity: opacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 0],
          }),
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <FacebookIcon height={18} width={18} />
            <DmzText text="Sign up" style={{marginLeft: 20}} lite />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <GoogleIcon height={18} width={18} />
            <DmzText text="Sign up" style={{marginLeft: 20}} lite />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <DmzText text="Already have an account? " lite type={3} />
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('signupScreen', {signupAs: loginAs})
            }>
            <DmzText text=" Sign in" lite type={3} style={{color: '#EB4B2B'}} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

export default DmzLogin;
