import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfilePic from '../../atoms/ProfilePic/ProfilePic';
import DmzText from '../../atoms/DmzText/DmzText';

function Profile({sourceurl, ProfileName, ProfileEmail, style}) {
  return (
    <View style={[Styles.Container, {marginRight: 20}]}>
      <ProfilePic
        sourceurl={sourceurl}
        style={{Container: Styles.ProfilePic, Image: {borderRadius: 15}}}
      />
      <View style={Styles.ProfileDetail}>
        <DmzText text={ProfileName} style={Styles.ProfileInfoTextPrimary} />
        <DmzText text={ProfileEmail} style={Styles.ProfileInfoTextSecondary} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    alignItems: 'flex-start',
  },
  ProfilePic: {
    width: 85,
    height: 57,
    borderRadius: 15,
  },
  ProfileDetail: {
    // marginLeft: 10,
  },
  ProfileInfoTextPrimary: {
    color: '#000',
    fontSize: 12,
    lineHeight: null,
    letterSpacing: 0.5,
  },
  ProfileInfoTextSecondary: {
    color: '#949494',
    fontWeight: '500',
    fontSize: 9,
    lineHeight: null,
  },
});
export default Profile;
