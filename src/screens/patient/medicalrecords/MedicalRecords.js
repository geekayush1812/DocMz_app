// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar'
// import NotFound from '../../../components/organisms/NotFound/NotFound'

// const MedicalRecords = ({ navigation }) => {
//   const [isEmpty, setIsEmpty] = useState(true)
//   return (
//     <View>
//       <TopNavBar navigation={navigation} isClap={true} onLeftButtonPress={() => navigation.goBack(null)} headerText={"Medical Records"} />
//       {
//         isEmpty ? <NotFound /> :
//           <Text>MadicalRecords</Text>
//       }
//     </View>
//   )
// }

// export default MedicalRecords

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import Ham from '../../../assets/svg/hamburger.svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzSearchbar from '../../../components/molecules/DmzSeachbar/DmzSearchbar';
import BlockLinker from '../../../components/molecules/BlockLinker/BlockLinker';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import LinkedComponent from '../../../components/molecules/LinkedComponent/LinkedComponent';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {Colors} from '../../../styles/index';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Overlay from '../../../components/atoms/Overlay/Overlay';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconsRow from '../../../components/atoms/IconsRow/IconsRow';
import Dot from '../../../components/atoms/ToggleDot/ToggleDot';
import VerticleText from '../../../components/atoms/VerticalText/VerticalText';
import Counter from '../../../components/molecules/Counter/Counter';
import {TouchableOpacity} from 'react-native-gesture-handler';
function MedicalRecords() {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [review, setReview] = useState(false);
  const onPress = () => {
    setShowAddRecord(true);
  };
  return (
    <View style={Styles.Container}>
      <GradientTopNavBar
        headerText=""
        LeftComp={
          <ProfilePic
            sourceurl={require('../../../assets/jpg/person1.jpg')}
            style={{Container: {height: 28, width: 28}}}
          />
        }
        RightComp={<Ham height={28} width={28} />}
      />
      <View style={Styles.HeaderTextContainer}>
        <DmzText
          text="Hello Ayush"
          lite
          gap_medium
          style={{color: '#575757'}}
        />
        <DmzText
          text="Medical History"
          extera_bold
          type={5}
          style={{color: '#444'}}
          gap_medium
        />

        {!showAddRecord && <DmzSearchbar placeholder="search medicine" />}
        {/* when list of medication isn't */}

        <View style={Styles.AddNewContainer}>
          <DmzText type={2} normal gap_small text="Add a new medication" />
          <TouchableOpacity onPress={onPress}>
            <SimpleIcon name="plus" color={'blue'} size={12} />
          </TouchableOpacity>
        </View>

        {/* review list */}
        {review && (
          <View>
            <LinkedComponent linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={2} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={2} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>
            <LinkedComponent type={0} linkColor={'#F4C130'}>
              <AnimInput placeholder="medical" />
            </LinkedComponent>

            <DmzButton
              text="Save"
              style={{
                Container: {
                  backgroundColor: Colors.header_grad_two,
                  height: 30,
                  borderRadius: 40,
                  alignSelf: 'center',
                  marginTop: 40,
                },
                Text: {
                  color: '#f1f1f1',
                },
              }}
            />
          </View>
        )}
      </View>
      {showAddRecord && (
        <Overlay
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}>
          <BasicCard
            style={{
              CardContainer: {
                width: '80%',
                marginRight: null,
                height: '70%',
                justifyContent: null,
                alignItems: null,
                padding: 20,
                zIndex: 9999,
              },
            }}>
            <DmzText
              lite
              gap_small
              text="Dose Appearance"
              style={{color: '#777'}}
            />
            <IconsRow
              Icon={<FontAwesome name="heart" size={20} color="#ccc" />}
              number={6}
            />
            <View style={Styles.ColorContainer}>
              <View style={{flex: 1}}>
                <DmzText lite gap_small text="Colors" style={{color: '#777'}} />
              </View>
              <View style={Styles.Colors}>
                <Dot style={{height: 10, width: 10}} />
                <Dot style={{height: 10, width: 10}} />
                <Dot style={{height: 10, width: 10}} />
                <Dot style={{height: 10, width: 10}} />
                <Dot style={{height: 10, width: 10}} />
              </View>
            </View>
            <DmzText
              lite
              gap_small
              text="Take as per needed"
              style={{color: '#777'}}
            />
            <DmzText lite gap_small text="Schedule" style={{color: '#777'}} />
            <View style={Styles.DayContainer}>
              <VerticleText text={{Top: 'M', Bottom: '7'}} />
              <VerticleText text={{Top: 'Tu', Bottom: '8'}} />
              <VerticleText isActive text={{Top: 'W', Bottom: '9'}} />
              <VerticleText isActive text={{Top: 'Th', Bottom: '10'}} />
              <VerticleText text={{Top: 'F', Bottom: '11'}} />
              <VerticleText isActive text={{Top: 'Sa', Bottom: '12'}} />
              <VerticleText isActive text={{Top: 'Su', Bottom: '13'}} />
            </View>
            <AnimInput placeholder="Start Date" />
            <AnimInput placeholder="End Date (optional)" />
            <DmzText
              lite
              gap_small
              text="Reminders & Dosage"
              style={{color: '#777'}}
            />
            <Counter />
          </BasicCard>
        </Overlay>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  HeaderTextContainer: {
    padding: 20,
  },
  AddNewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Colors: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default MedicalRecords;
