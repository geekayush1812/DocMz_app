import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Avater from '../../../atoms/Avater/Avater';
import DmzText from '../../../atoms/DmzText/DmzText';
import Option from '../../../molecules/Option/Option';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { resetStore } from '../../../../redux/action/auth';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExpandableOption from '../../../molecules/ExpandableOption/ExpandableOption';
const Navigation = [
  {
    active: true,
    name: 'Appointments',
    icon: 'book',
    navigateTo: 'Appointments',
  },
  {
    active: true,
    name: 'Family Member',
    icon: 'user',
    navigateTo: 'FamilyMember',
  },
  {
    active: true,
    name: 'Nested',
    icon: 'book',
    // navigateTo: 'Appointments',
    isNested: true,
    nestedRoutes: [
      {
        active: true,
        name: 'My Doctors',
        icon: 'account',
        navigateTo: 'MyDoctors',
      },
      {
        active: true,
        name: 'Medical Records',
        icon: 'account-card-details',
        navigateTo: 'MedicalRecords',
      },
      {
        active: true,
        name: 'Payments',
        icon: 'credit-card',
        navigateTo: 'Payments',
      },
    ],
  },
  {
    active: true,
    name: 'Orders',
    icon: 'checkbox-multiple-blank',
    navigateTo: 'Orders',
  },
  // {
  //   active: true,
  //   name: 'Consultations',
  //   icon: 'message',
  //   navigateTo: 'Consultations'
  // },
  {
    active: true,
    name: 'My Doctors',
    icon: 'account',
    navigateTo: 'MyDoctors',
  },
  {
    active: true,
    name: 'Medical Records',
    icon: 'account-card-details',
    navigateTo: 'MedicalRecords',
  },
  {
    active: true,
    name: 'Payments',
    icon: 'credit-card',
    navigateTo: 'Payments',
  },
  {
    active: true,
    name: 'Settings',
    icon: 'settings-outline',
    navigateTo: 'AppSettings',
  },
  {
    active: true,
    name: 'Help',
    icon: 'help-rhombus-outlin',
    navigateTo: 'Help',
  },
  // {
  //   active: true,
  //   name: 'Are you doctor ?',
  //   icon: 'doctor',
  //   navigateTo: '',
  // },
];

const Custom = ({
  navigation,
  name = 'jui sarkar',
  phone_num = '8001981993',
  activeItemKey,
}) => {
  const { isLogedin, isDoctor, data } = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  console.log(navigation);
  const _logout = () => {
    dispatch(resetStore());
    navigation.navigate('Home');
  };
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.section, styles.sectionTop]}>
          <LinearGradient
            style={{ width: '100%' }}
            colors={['rgba(15, 12, 9,0.7)', 'rgba(15, 12, 9,1)']}
            useAngle={true}
            angle={-90}>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                style={styles.touchableButton}
                onPress={closeDrawer}>
                <FontAwesome size={28} color={'#ff1f75'} name="angle-left" />
              </TouchableOpacity>
            </View>

            <View style={styles.profile}>
              <Avater type={3} />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <DmzText
                  text={!data ? 'no name' : data.name}
                  type={4}
                  bold
                  gap_medium
                  style={{ color: '#f1f1f1', lineHeight: 18 }}
                />
                <DmzText
                  text={!data ? '0000000000' : data.phone}
                  center
                  gap_big
                  lite
                  style={{ color: '#f1f1f1', lineHeight: 18 }}
                />
              </View>
            </View>
            <View style={styles.floatingCard}>
              <View
                style={[styles.floatingCardSection, styles.thinBorderRight]}>
                <View>
                  <DmzText
                    text="Weight"
                    type={0}
                    lite
                    style={styles.floatingCardSectionHeading}
                  />
                  <DmzText
                    text="61"
                    type={4}
                    lite
                    style={{ textTransform: 'uppercase', color: '#555' }}
                  />
                </View>
                <TouchableOpacity style={styles.touchableButton}>
                  <FontAwesome size={28} color={'#ff1f75'} name="angle-right" />
                </TouchableOpacity>
              </View>
              <View style={styles.floatingCardSection}>
                <View>
                  <DmzText
                    text="BMI"
                    type={0}
                    lite
                    style={styles.floatingCardSectionHeading}
                  />
                  <DmzText
                    text="21.38"
                    type={4}
                    lite
                    style={{ textTransform: 'uppercase', color: '#555' }}
                  />
                </View>
                <TouchableOpacity style={styles.touchableButton}>
                  <FontAwesome size={28} color={'#ff1f75'} name="angle-right" />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        {Navigation.map((row, index) => {
          if (row.isNested) {
            return (
              <ExpandableOption
                key={index}
                active={isLogedin}
                name={row.name}
                icon={row.icon}
                activeItemKey={activeItemKey}
                navigateTo={row.navigateTo}
                isNested={row.isNested}
                nestedRoutes={row.nestedRoutes}
                navigation={navigation}
              />
            );
          }
          return (
            <ExpandableOption
              key={index}
              active={isLogedin}
              name={row.name}
              icon={row.icon}
              activeItemKey={activeItemKey}
              navigateTo={row.navigateTo}
              navigation={navigation}
              goto={() =>
                !isLogedin
                  ? navigation.navigate('authentication')
                  : navigation.navigate(row.navigateTo)
              }
            />
          );
        })}
        <Option
          key={'logout'}
          active={isLogedin}
          name={'Logout'}
          icon={'book'}
          goto={() => _logout()}
          activeItemKey={activeItemKey}
          navigateTo={'logout'}
        />
        {
          !isLogedin && <Option
            key={'Are you doctor ?'}
            active={!isLogedin}
            name={'Are you doctor ?'}
            icon={'doctor'}
            goto={() => navigation.navigate('loginScreen', { loginAs: 'doctor' })}
            activeItemKey={activeItemKey}
            navigateTo={'loginScreen'}
          />
        }

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
  section: {
    backgroundColor: '#fafafa',
    marginBottom: 8,
  },
  sectionTop: { marginBottom: 50, position: 'relative' },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    height: 80,
    alignItems: 'center',
  },
  backButtonContainer: {
    height: 28,
    width: 28,
    marginTop: 10,
    marginLeft: 15,
  },
  touchableButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCard: {
    height: 60,
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    elevation: 4,
    transform: [
      {
        translateY: 30,
      },
    ],
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  floatingCardSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  thinBorderRight: {
    borderRightWidth: 0.3,
  },
  floatingCardSectionHeading: {
    textTransform: 'uppercase',
    color: '#555',
    lineHeight: 10,
  },
  option: {},
});

export default Custom;
