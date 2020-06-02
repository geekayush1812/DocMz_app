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
import Overlay from '../../../components/atoms/Overlay/Overlay';
import BasicCard from '../../../components/atoms/BasicCard/BasicCard';

function AddQuestionnaire() {
  const [options, setOptions] = useState([]);
  const [Question, setQuestion] = useState({
    title: '',
    superQuestion: 'false',
    option: [],
    specialty: '',
    category: '',
    optionText: '',
    root: 'true',
    id: '',
  });
  const [showAddLinkedPopup, setShowAddLinkedPopup] = useState(false);
  const [parentId, setParentId] = useState('');
  const [optionId, setOptionId] = useState('');
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.AuthReducer);
  const {
    gettingQuestionnaire,
    questions,
    isLoading,
    questionDetails,
  } = useSelector(state => state.questionnaireReducer);
  useEffect(() => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    !gettingQuestionnaire && dispatch(GetQuestion(data.id));
  }, []);

  //could be used when API return data of added question till then dispatch an action when submit
  // useEffect(() => {
  //   !isLoading && setQuestion(questionDetails);
  // }, [questionDetails]);

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
      };
    });
    let Fques = {
      ...Question,
      option: JSON.stringify(optionTemp),
      id: data.id,
    };
    dispatch(AddQuestion(Fques));
    dispatch(GetQuestion(data.id));
  };
  const onClickQuestion = question => {
    const {option} = question;

    console.log(
      '&&&&&&&%&&&&&&&&&&%%%%%%%%%%%%%&&&&&&&%%%%%%%%%%%%%%%%75555555555',
    );
    console.log(question);
    console.log(option);
    setQuestion(question);
    setOptions(option);
  };
  const onPressReset = () => {
    setQuestion({
      ...Question,
      title: '',
      superQuestion: 'false',
      option: [],
      specialty: '',
      category: '',
      optionText: '',
      root: 'false',
      id: '',
    });
    setOptions([]);
  };
  const onPressLinkedOption = optionId => {
    setParentId(Question._id);
    setOptionId(optionId);
  };
  const openLinkedPopup = () => {
    setShowAddLinkedPopup(true);
  };
  const closeLinkedPopup = () => {
    setShowAddLinkedPopup(false);
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
                console.log('new new new nenwenwenwen wenw en');
                const linked = item.option.reduce((acc, curr) => {
                  acc.push(...curr.linkedQuestion);
                  return acc;
                }, []);
                return (
                  <ExpandableList
                    key={item._id}
                    name={item.title.slice(0, 20).concat('...')}
                    nestedList={linked}
                    onPressList={() => onClickQuestion(item)}
                    onClickQuestion={onClickQuestion}
                  />
                );
              })
            ) : (
              <Text>empty questions</Text>
            )}
          </View>
          <AddQuestionTemplate
            Question={Question}
            handles={{
              handleTitleInput,
              handleCategoryInput,
              handleSpecialityInput,
              onPressReset,
            }}
            optionProp={{options, setOptions, removeOption, addOption}}
            onSubmit={onSubmit}
          />
          {Question.option.length !== 0 && (
            <AddLinkedOption
              options={Question.option}
              onPressLinkedOption={onPressLinkedOption}
              openLinkedPopup={openLinkedPopup}
            />
          )}
        </ScrollView>
      </Container>
      {showAddLinkedPopup && (
        <LinkedController
          parentId={parentId}
          optionId={optionId}
          closeLinkedPopup={closeLinkedPopup}
        />
      )}
    </View>
  );
}

export default AddQuestionnaire;

const AddQuestionTemplate = ({
  Question,
  handles: {
    handleCategoryInput,
    handleTitleInput,
    handleSpecialityInput,
    onPressReset,
  },
  optionProp: {options, setOptions, removeOption, addOption},
  questionHeader,
  onSubmit,
}) => {
  const {title, specialty, category} = Question;
  return (
    <>
      <DmzText text={questionHeader || 'Question'} type={4} />
      <AnimInput
        value={title}
        placeholder="Title"
        style={{Container: {marginTop: 10}}}
        inputHandler={handleTitleInput}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          width: '100%',
        }}>
        <AnimInput
          placeholder="Speciality"
          style={{Container: {width: '40%'}}}
          inputHandler={handleSpecialityInput}
          value={specialty}
        />
        <AnimInput
          placeholder="Category"
          style={{Container: {width: '40%'}}}
          inputHandler={handleCategoryInput}
          value={category}
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
          onPress={onPressReset}
          style={{
            Container: {
              borderColor: '#999',
              borderWidth: 0.7,
              borderRadius: 20,
            },
          }}
        />
      </View>
    </>
  );
};

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
  useEffect(() => {
    setInputTypeGlobal('radio');
  }, []);
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

const LinkedController = ({parentId, optionId, closeLinkedPopup}) => {
  const [options, setOptions] = useState([]);
  const [Question, setQuestion] = useState({
    title: '',
    superQuestion: 'false',
    option: [],
    specialty: '',
    category: '',
    root: 'false',
    id: '',
    parent: '',
    optionId: '',
  });
  const {data} = useSelector(state => state.AuthReducer);
  const addOption = () => {
    const schema = {
      _id: new Date().getTime().toString(),
      optionType: '',
      text: '',
      linkedQuestion: [],
    };
    setOptions([...options, schema]);
  };
  const dispatch = useDispatch();
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
  const onPressReset = () => {
    setQuestion({
      title: '',
      superQuestion: 'false',
      option: [],
      specialty: '',
      category: '',
      optionText: '',
      root: 'false',
      id: '',
    });
    setOptions([]);
  };
  const onSubmit = () => {
    let optionTemp = options.map(item => {
      return {
        optionType: item.optionType,
        text: item.text,
      };
    });
    let Fques = {
      ...Question,
      option: JSON.stringify(optionTemp),
      id: data.id,
      parent: parentId,
      optionId: optionId,
    };
    dispatch(AddQuestion(Fques));
    dispatch(GetQuestion(data.id));
  };
  return (
    <Overlay
      onPress={closeLinkedPopup}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <BasicCard
        style={{
          CardContainer: {height: '80%', width: '90%', marginRight: null},
        }}>
        <AddQuestionTemplate
          questionHeader="Link a Question"
          Question={Question}
          handles={{
            handleTitleInput,
            handleCategoryInput,
            handleSpecialityInput,
            onPressReset,
          }}
          optionProp={{options, setOptions, removeOption, addOption}}
          onSubmit={onSubmit}
        />
        <DmzButton
          style={{
            Container: {
              elevation: 8,
              backgroundColor: '#ff0f05',
              marginTop: 5,
              borderRadius: 10,
            },
            Text: {color: '#fff'},
          }}
          text="close"
          onPress={closeLinkedPopup}
        />
      </BasicCard>
    </Overlay>
  );
};

const AddLinkedOption = ({
  options,
  onPressLinkedOption = () => {},
  openLinkedPopup,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0] || '');
  const onPressLinkedOptionLocal = (itemValue, itemIndex) => {
    const option = options.find(item => item.text === itemValue);
    console.log(option);
    onPressLinkedOption(option._id);
    setSelectedOption(itemValue);
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
        justifyContent: 'space-around',
        height: 50,
        overflow: 'hidden',
      }}>
      <Picker
        mode="dropdown"
        style={{flex: 1, height: 25}}
        selectedValue={selectedOption}
        onValueChange={onPressLinkedOptionLocal}>
        {options.length !== 0 &&
          options.map(item => {
            return (
              <Picker.Item key={item._id} label={item.text} value={item.text} />
            );
          })}
      </Picker>
      <DmzButton
        onPress={openLinkedPopup}
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
