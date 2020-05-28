import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import DmzButton from '../../../components/atoms/SwitchButton/SwitchButton';
import {Picker} from '@react-native-community/picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddQuestion,
  GetQuestion,
} from '../../../redux/action/doctor/questionnaireAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ExpandableList from '../../../components/molecules/ExpandableList/ExpandableList';

function AddQuestionnaire() {
  const [options, setOptions] = useState([]);
  const [Question, setQuestion] = useState({
    title: '',
    superQuestion: false,
    option: [],
    specialty: '',
    category: '',
    parent: '',
    optionText: '',
    root: false,
    id: '',
  });
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.AuthReducer);
  const {gettingQuestionnaire, questions} = useSelector(
    state => state.questionnaireReducer,
  );
  useEffect(() => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    !gettingQuestionnaire && dispatch(GetQuestion(data.id));
  }, []);
  const addOption = () => {
    const schema = {
      _id: new Date().getTime().toString(),
      optionType: '',
      text: '',
      linkedQuestion: [],
    };
    setOptions([...options, schema]);
  };
  const removeOption = _id => {
    let removed = [];
    removed = options.filter(item => item._id !== _id);
    setOptions(removed);
  };
  const handleTitleInput = text => {
    setQuestion({...Question, title: text});
  };
  const handleSpecialityInput = text => {
    setQuestion({...Question, specialty: text});
  };
  const handleCategoryInput = text => {
    setQuestion({...Question, category: text});
  };
  const onSubmit = () => {
    let optionTemp = options.map(item => {
      return {
        optionType: item.optionType,
        text: item.text,
        linkedQuestion: item.linkedQuestion,
      };
    });
    let Fques = {
      ...Question,
      option: JSON.stringify(optionTemp),
      root: true,
      id: data.id,
      parent: null,
    };
    dispatch(AddQuestion(Fques));
    setQuestion(Fques);
  };
  const onClickQuestion = question => {
    const {option} = question;
    setQuestion({
      ...Question,
      ...question,
    });
    setOptions(option);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FancyHeader
        hideLeftComp
        hideRightComp
        headerText="Questionnaire"
        style={{
          Container: {
            height: '25%',
            overflow: 'hidden',
          },
        }}
      />
      <Container
        style={{
          height: '75%',
          transform: [
            {
              translateY: -30,
            },
          ],
          // paddingVertical: 20,
          // paddingHorizontal: 25,
        }}>
        <ScrollView
          contentContainerStyle={{paddingVertical: 40}}
          style={{marginTop: 10, paddingHorizontal: 25}}>
          <View>
            {gettingQuestionnaire ? (
              <ActivityIndicator />
            ) : questions.length ? (
              questions.map(item => {
                return (
                  <ExpandableList
                    key={item._id}
                    name={item.title}
                    onPressList={() => onClickQuestion(item)}
                  />
                );
              })
            ) : (
              <Text>empty questions</Text>
            )}
          </View>
          <DmzText text="Question " type={4} />
          <AnimInput
            value={Question.title}
            placeholder="Title"
            style={{Container: {marginTop: 10}}}
            inputHandler={handleTitleInput}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <AnimInput
              placeholder="Speciality"
              style={{Container: {width: '40%'}}}
              inputHandler={handleSpecialityInput}
              value={Question.specialty}
            />
            <AnimInput
              placeholder="Category"
              style={{Container: {width: '40%'}}}
              inputHandler={handleCategoryInput}
              value={Question.category}
            />
          </View>

          {options.map(item => (
            <Option
              key={item._id}
              item={item}
              options={options}
              setOptions={setOptions}
              onPressRemove={removeOption}
            />
          ))}

          <View style={{marginTop: 20}}>
            <DmzButton
              onPress={addOption}
              text="Add Option"
              style={{
                Container: {
                  borderColor: '#999',
                  borderWidth: 0.7,
                  borderRadius: 20,
                },
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              alignSelf: 'center',
              marginTop: 25,
            }}>
            <DmzButton
              onPress={onSubmit}
              text="Update"
              style={{
                Container: {backgroundColor: '#76b434', borderRadius: 20},
                Text: {
                  color: '#fff',
                },
              }}
            />
            <DmzButton
              text="Reset"
              style={{
                Container: {
                  borderColor: '#999',
                  borderWidth: 0.7,
                  borderRadius: 20,
                },
              }}
            />
          </View>
          {Question.option && <AddLinkedOption options={Question.option} />}
        </ScrollView>
      </Container>
    </View>
  );
}

export default AddQuestionnaire;

const Option = ({item, onPressRemove, options, setOptions}) => {
  const handleInput = text => {
    let optionTemp = options.filter(i => i._id !== item._id);
    optionTemp = [
      ...optionTemp,
      {
        _id: item._id,
        optionType: item.optionType,
        text: text,
        linkedQuestion: [],
      },
    ];
    setOptions(optionTemp);
  };
  const onPressRemoveButton = () => {
    onPressRemove(item._id);
  };
  const setInputTypeGlobal = value => {
    let optionTemp = options.filter(i => i._id !== item._id);
    optionTemp = [
      ...optionTemp,
      {
        _id: item._id,
        optionType: value,
        text: item.text,
        linkedQuestion: [],
      },
    ];
    setOptions(optionTemp);
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        overflow: 'hidden',
      }}>
      <Picker
        mode="dropdown"
        style={{width: '40%', height: 25}}
        selectedValue={item.optionType}
        onValueChange={(itemValue, itemIndex) => setInputTypeGlobal(itemValue)}>
        <Picker.Item label="Radio" value="radio" />
        <Picker.Item label="Text" value="text" />
      </Picker>
      <AnimInput
        inputHandler={handleInput}
        withAnim={false}
        value={item.text}
        placeholder="option"
        style={{
          Container: {borderBottomWidth: 0, width: '40%'},
        }}
      />
      <DmzButton
        onPress={onPressRemoveButton}
        text="X"
        style={{
          Container: {
            backgroundColor: 'rgb(210,10,20)',
            width: '15%',
            height: '100%',
          },
          Text: {color: '#fff'},
        }}
      />
    </View>
  );
};

const AddLinkedOption = ({options, onClickLinkedOption = () => {}}) => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        overflow: 'hidden',
      }}>
      <Picker
        mode="dropdown"
        style={{flex: 1, height: 25}}
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}>
        {options &&
          options.map(item => {
            return (
              <Picker.Item key={item._id} label={item.text} value={item.text} />
            );
          })}
      </Picker>
      <DmzButton
        onPress={onClickLinkedOption}
        text="Add linked Question"
        style={{
          Container: {
            backgroundColor: 'rgb(210,10,20)',
            flex: 1,
            height: '100%',
            marginLeft: 5,
          },
          Text: {color: '#fff'},
        }}
      />
    </View>
  );
};
