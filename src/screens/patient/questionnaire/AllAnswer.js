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
      const dispatch = useDispatch()
      const { data } = navigation.state.params
      console.log(data)

      // useEffect(() => {
      //       dispatch(GetFamilyMember('5eb31e07e078c64910b9d29e'))
      //       // familyMember.length > 0 && familyMember.map( itm => setDetails({ ...details, visitFor: itm.relationship}))
      //       console.log(familyMember)
      // }, [])

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
                              <View>
                                    {
                                          data.map((item, index) => (

                                                <View key={index} style={{ marginBottom: 20 }}>
                                                      <Text>{item.question}</Text>
                                                      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                            {
                                                                  item.type === 'multiple' ?
                                                                        item.answer.map(item => <SMbutton
                                                                              onClick={() => console.log('click! click!')}
                                                                              key={index}
                                                                              name={item}
                                                                              active={1}
                                                                              style={{ height: 25, width: 'auto' }}
                                                                        />) : <SMbutton
                                                                              onClick={() => console.log('click! click!')}
                                                                              key={index}
                                                                              name={item.answer}
                                                                              active={1}
                                                                              style={{ height: 25, width: 'auto' }}
                                                                        />

                                                            }
                                                      </View>

                                                </View>
                                          ))
                                    }
                              </View>
                              <SMbutton
                                    name="PAY FOR VISIT"
                                    active={0}
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
