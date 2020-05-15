import React, {useState, useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  LayoutAnimation,
  Text,
  Platform,
  UIManager,
  InteractionManager,
  Easing,
} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import ToggleButton from '../../../components/molecules/ToggleButton/ToggleButton';
import Container from '../../../components/organisms/Container/Container';
import DmzSwitch from '../../../components/molecules/DmzSwitch/DmzSwitch';
import ProfilePic from '../../../components/atoms/ProfilePic/ProfilePic';
import TimelineContainer from '../../../components/molecules/TimelineContainer/TimelineContainer';
import {months} from '../../../utils/Months';
import CalenderMonth from '../../../components/molecules/CalenderMonth/CalenderMonth';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Home = () => {
  const [tabIndex, settabIndex] = useState(0);
  const tabIndexPos = useRef(new Animated.Value(0)).current;
  const [timeline, setTimeline] = useState(1);
  const onTabPress = function(tab) {
    if (tabIndex === 0 && tab === 2) {
      InteractionManager.runAfterInteractions(() => {
        Animated.timing(tabIndexPos, {
          toValue: 1,
          easing: Easing.elastic(),
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          settabIndex(1);
        });
      });
    }
    if (tabIndex === 1 && tab === 1) {
      InteractionManager.runAfterInteractions(() => {
        Animated.timing(tabIndexPos, {
          toValue: 0,
          easing: Easing.elastic(),
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          settabIndex(0);
        });
      });
    }
  };
  const Data = [
    {
      _id: 1,
      PatientName: 'Bella Campbell',
      Timing: '9:00 AM',
      Age: '26 yrs',
      Disease: 'Medical Checkup',
      Profile: (
        <ProfilePic
          sourceurl={require('../../../assets/jpg/person1.jpg')}
          style={{
            Container: Styles.ProfilePic,
            Image: Styles.ProfilePicImage,
          }}
        />
      ),
    },
    {
      _id: 2,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <ProfilePic
          sourceurl={require('../../../assets/jpg/person2.jpg')}
          style={{
            Container: Styles.ProfilePic,
            Image: Styles.ProfilePicImage,
          }}
        />
      ),
    },
    {
      _id: 3,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <ProfilePic
          sourceurl={require('../../../assets/jpg/person3.jpg')}
          style={{
            Container: Styles.ProfilePic,
            Image: Styles.ProfilePicImage,
          }}
        />
      ),
    },
    {
      _id: 4,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <ProfilePic
          sourceurl={require('../../../assets/jpg/person3.jpg')}
          style={{
            Container: Styles.ProfilePic,
            Image: Styles.ProfilePicImage,
          }}
        />
      ),
    },
    {
      _id: 5,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <ProfilePic
          sourceurl={require('../../../assets/jpg/person3.jpg')}
          style={{
            Container: Styles.ProfilePic,
            Image: Styles.ProfilePicImage,
          }}
        />
      ),
    },
  ];

  return (
    <View style={Styles.Container}>
      <FancyHeader
        headerText="Appointment"
        style={{Container: {height: '35%'}}}>
        <ToggleButton text="online" />
      </FancyHeader>
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -50}],
          zIndex: 999,
        }}>
        <DmzSwitch
          tabOne={{title: 'Appointments', onPress: () => onTabPress(1)}}
          tabTwo={{title: 'Calender', onPress: () => onTabPress(2)}}
          style={{
            Container: {
              marginTop: 0,
              borderRadius: 38,
              elevation: 5,
              backgroundColor: '#fff',
            },
            Button: {height: 60},
            Slider: {
              borderWidth: null,
              backgroundColor: '#6231CB',
              zIndex: -10,
            },
            activeStyle: {color: '#fff'},
          }}
        />

        {tabIndex === 0 ? (
          <Animated.FlatList
            style={{
              flex: 1,
              paddingTop: 10,
              transform: [
                {
                  scale: tabIndexPos.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            }}
            data={Data}
            keyExtractor={item => item._id.toString()}
            renderItem={({item}) => (
              <TimelineContainer
                PatientName={item.PatientName}
                Timing={item.Timing}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.create(
                      500,
                      LayoutAnimation.Types.easeIn,
                      LayoutAnimation.Properties.opacity,
                    ),
                  );
                  setTimeline(item._id);
                }}
                Age={item.Age}
                Disease={item.Disease}
                Profile={item.Profile}
                active={item._id === timeline}
              />
            )}
          />
        ) : null}
        {tabIndex === 1 ? (
          <Animated.FlatList
            style={
              {
                // transform: [
                //   {
                //     scale: tabIndexPos.interpolate({
                //       inputRange: [0, 1],
                //       outputRange: [0, 1],
                //     }),
                //   },
                // ],
              }
            }
            data={months}
            keyExtractor={item => item.month.toString()}
            renderItem={({item}) => (
              <CalenderMonth month={item.month - 1} item={item} />
            )}
          />
        ) : null}
      </Container>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  ProfilePic: {
    height: 60,
    width: 60,
    borderWidth: 0,
    borderRadius: 60,
  },
  ProfilePicImage: {
    borderRadius: 60,
  },
});

export default Home;
