import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import SMbutton from '../../../components/atoms/SMbutton/SMbutton';
import OverlayGradient from '../../../assets/svg/gradient_curve_lite.svg';
import HeaderCurve_lite from '../../../assets/svg/headerCurve_lite.svg';
import NavBackCustom from '../../../assets/svg/nav_back_custom.svg';
const BookingDetails = ({navigation}) => {
  const [details, setDetails] = useState({
    visitFor: ['me', 'child', 'Father', 'Mother'],
    contactNum: '',
    guest: '',
  });
  const [activeId, setActiveId] = useState(0);

  return (
    <View style={styles.Container}>
      <FancyHeader
        showOverlayComponent={false}
        LeftComp={<NavBackCustom />}
        headerText="DocMz"
        overlayComponents={
          <>
            <OverlayGradient style={{position: 'absolute', right: 0}} />
            <HeaderCurve_lite style={{position: 'absolute', right: 0}} />
          </>
        }
        navigation={navigation}
        style={{
          Container: {height: '25%'},
          ChildContainer: {alignItems: 'center'},
        }}
      />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -50}],
          zIndex: 999,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
        }}>
        <View style={{height: '80%', width: '90%'}}>
          <View
            style={{
              flex: 3,
            }}>
            <Text>Who is this visit for ?</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 50,
              }}>
              {details.visitFor.map((item, index) => (
                <SMbutton
                  name={item}
                  id={index}
                  active={activeId}
                  onClick={id => setActiveId(id)}
                />
              ))}
            </View>
          </View>
          <View style={{flex: 2}}>
            <Text>
              Where can this provider call you for follow-up,{'\n'} If needed?
            </Text>
            <View style={styles.input}>
              <TextInput
                style={{fontSize: 12}}
                placeholder={'(+91) - 9494551439'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text>Invite guest(s) to join your visit?</Text>
            <View style={styles.input}>
              <TextInput style={{fontSize: 12}} placeholder={'optional..'} />
            </View>
          </View>
          <SMbutton
            name="NEXT"
            style={{
              height: 40,
              width: '60%',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onClick={() => navigation.navigate('NewQuestionnaire')}
          />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  input: {
    marginTop: 10,
    backgroundColor: '#fafafa',
    elevation: 2,
    borderRadius: 38,
    height: 38,
    paddingHorizontal: 30,
  },
});

export default BookingDetails;
