import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import GradientTopNavBar from '../../../components/molecules/TopNavBar/GradientTopNavBar';
import NotFound from '../../../components/organisms/NotFound/NotFound';
import {useSelector, useDispatch} from 'react-redux';
import {GetPatientInfo} from '../../../redux/action/patientAccountAction';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Overlay from '../../../components/atoms/Overlay/Overlay';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FamilyMember = ({navigation}) => {
  // const { patient, isPatientAccountReducerLoading } = useSelector(
  //   state => state.PatientAccountReducer,
  // );
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(GetPatientInfo(patient.id));
  }, []);

  const onOpenPopup = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setShowPopup(true);
  };

  const onClosePopup = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setShowPopup(false);
  };
  return (
    <View style={{flex: 1}}>
      <GradientTopNavBar
        navigation={navigation}
        isClap={true}
        onLeftButtonPress={() => navigation.goBack(null)}
        headerText={'My Doctor'}
      />
      {/* <Text>
        1. list of family member
        2. add family member then it will show a popup/model
      </Text> */}
      <View style={Styles.FamilyCardContainer}>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.CardContainer}>
          <View style={Styles.ImageContainer}>
            <Image
              source={require('../../../assets/jpg/person1.jpg')}
              style={Styles.Image}
            />
          </View>
          <View style={Styles.DetailsContainer}>
            <DmzText
              text="Name"
              type={1}
              semi_bold
              style={{lineHeight: 10, color: '#444'}}
            />
            <DmzText
              type={0}
              text="Relationship"
              style={{lineHeight: 10, color: '#888'}}
            />
          </View>
        </View>
        <View style={Styles.AddButton}>
          <TouchableOpacity
            onPress={onOpenPopup}
            style={Styles.AddButtonTouchable}>
            <FontAwesome name="plus" size={20} color="#ff1f75" />
          </TouchableOpacity>
        </View>
      </View>

      {showPopup && (
        <Overlay style={Styles.Overlay}>
          <BasicCard
            style={{
              CardContainer: Styles.BasicCard,
            }}>
            <DmzText type={4} style={Styles.OverlayHeader} text="Add Member" />
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="First name"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="Last name"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="Email"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="phone"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="Gender"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="Birth date"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <View style={Styles.InputContainer}>
              <AnimInput
                withAnim={false}
                placeholder="Relationship"
                style={{Container: Styles.AnimInputContainer}}
                inputHandler={txt => setData({...state, email: txt})}
              />
            </View>
            <DmzButton
              onPress={onClosePopup}
              text="Add"
              style={{
                Container: {
                  alignSelf: 'center',
                  marginTop: 30,
                  backgroundColor: '#ff1f75',
                  borderWidth: 0,
                },
                Text: {color: '#fafafa'},
              }}
            />
          </BasicCard>
        </Overlay>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  FamilyCardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    padding: 10,
    flexDirection: 'row',
  },
  CardContainer: {
    height: 120,
    width: 110,
    backgroundColor: '#fafafa',
    elevation: 2,
    paddingBottom: 5,
    borderRadius: 10,
    margin: 10,
  },
  ImageContainer: {height: '80%', width: '100%'},
  Image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  DetailsContainer: {
    height: '20%',
    width: '100%',
    padding: 5,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  AddButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    elevation: 8,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginTop: 50,
  },
  AddButtonTouchable: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BasicCard: {
    height: '80%',
    width: '90%',
    marginRight: null,
    justifyContent: null,
    alignItems: null,
  },
  OverlayHeader: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ff1f75',
  },
  Overlay: {justifyContent: 'center', alignItems: 'center'},
  InputContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  AnimInputContainer: {borderBottomWidth: 0, height: 40},
});
export default FamilyMember;
