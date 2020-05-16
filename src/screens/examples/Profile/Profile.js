import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import {ScrollView} from 'react-native-gesture-handler';
function Profile() {
  const dimen = useWindowDimensions();
  const screenWidth = dimen.width;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
            // onPress={}
          >
            <FontAwesome size={30} color={'#ff1f75'} name="angle-left" />
          </TouchableOpacity>
          <Text style={{fontSize: 18, marginLeft: 15}}>Profile</Text>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          <View
            style={{
              height: 150,
              width: 150,
              borderRadius: 150,
              backgroundColor: '#fff',
              overflow: 'hidden',
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../../assets/jpg/person1.jpg')}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
                height: 30,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(80,80,80,0.3)',
              }}>
              <Text style={{color: '#f2f2f2', fontSize: 12}}>Upload</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 10,
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 8,
            paddingBottom: 8,
          }}>
          <AnimInput
            placeholder="Name"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Contact Number"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Email Id"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Gender"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Date of Birth"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Blood Group"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Height"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />
          <AnimInput
            placeholder="Weight"
            style={{Container: {marginBottom: 5, borderBottomWidth: 0.5}}}
          />

          <TouchableOpacity
            style={{
              width: screenWidth * 0.6,
              height: 52,
              backgroundColor: '#ff1f75',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 40,
              borderRadius: 15,
              elevation: 3,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#f1f1f1'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
