// import React from 'react'
// import { View, Text } from 'react-native'
// import { useSelector } from 'react-redux'

// const AllAnswer = ({navigation}) => {
//       // const { answer } = useSelector(state => state.QuestionReducer)
//       // console.log('---------------------')
//       // console.log(answer)

//       const {data} = navigation.state.params
//       console.log(data)
//       return (
//             <View>
//                   {
//                         data.map(item => (

//                               <View style={{ marginBottom: 20 }}>
//                                     <Text>{item.question}</Text>
//                                     <Text>{item.answer}</Text>
//                               </View>
//                         ))
//                   }
//             </View>
//       )
// }

// export default AllAnswer




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import SMbutton from '../../../components/atoms/SMbutton/SMbutton';
import OverlayGradient from '../../../assets/svg/gradient_curve_lite.svg';
import HeaderCurve_lite from '../../../assets/svg/headerCurve_lite.svg';
import NavBackCustom from '../../../assets/svg/nav_back_custom.svg';
import { PRIMARY_BORDER_COLOR } from '../../../styles/colors'
import { useSelector, useDispatch } from 'react-redux';
import { GetFamilyMember } from '../../../redux/action/patientAccountAction';


const AllAnswer = ({ navigation }) => {
      const [details, setDetails] = useState({
            visitFor: ['me', 'child', 'Father', 'Mother'],
            contactNum: '',
            guest: '',
            reasonForVisit: '',
            name: ''
      });
      const [activeId, setActiveId] = useState(0);
      const { familyMember, isPatientAccountReducerLoading } = useSelector(state => state.PatientAccountReducer)
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(GetFamilyMember('5eb31e07e078c64910b9d29e'))
            // familyMember.length > 0 && familyMember.map( itm => setDetails({ ...details, visitFor: itm.relationship}))
            console.log(familyMember)
      }, [])

      setupRelation = (id) => {
            setActiveId(id)
            setDetails({ ...details, contactNum: familyMember[id].phone || '', name: familyMember[id].firstName + ' ' + familyMember[id].lastName || '' })
            console.log(details)
      }

      return (
            <View style={styles.Container}>
                  <FancyHeader
                        showOverlayComponent={false}
                        LeftComp={<NavBackCustom />}
                        headerText="DocMz"
                        overlayComponents={
                              <>
                                    <OverlayGradient style={{ position: 'absolute', right: 0 }} />
                                    <HeaderCurve_lite style={{ position: 'absolute', right: 0 }} />
                              </>
                        }
                        navigation={navigation}
                        style={{
                              Container: { height: '25%' },
                              ChildContainer: { alignItems: 'center' },
                        }}
                  />
                  <Container
                        style={{
                              height: '82%',
                              transform: [{ translateY: -50 }],
                              zIndex: 999,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#fafafa',

                        }}>
                        <ScrollView style={{ width: '90%', paddingTop: 40 }}>

                              <SMbutton
                                    name="NEXT"
                                    style={{
                                          height: 40,
                                          width: '60%',
                                          alignSelf: 'center',
                                          marginTop: 20,
                                    }}
                                    onClick={() => navigation.navigate('Questionnaire')}
                              />
                        </ScrollView>
                  </Container>
            </View>
      );
};

const styles = StyleSheet.create({
      Container: { flex: 1, backgroundColor: '#fff' },
      input: {
            marginVertical: 20,
            backgroundColor: '#fafafa',
            elevation: 2,
            borderRadius: 38,
            height: 38,
            paddingHorizontal: 30,
      },
});

export default AllAnswer;
