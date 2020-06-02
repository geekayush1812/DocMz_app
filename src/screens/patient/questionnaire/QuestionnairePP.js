import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import FancyHeader from '../../../components/organisms/FancyHeader/FancyHeader';
import Container from '../../../components/organisms/Container/Container';
import {useSelector, useDispatch} from 'react-redux';
import {GetQuestion} from '../../../redux/action/doctor/questionnaireAction';
import {Picker} from '@react-native-community/picker';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import RadioGroup from '../../../components/molecules/RadioGroup/RadioGroup';
import RadioBtn from '../../../components/atoms/RadioBtn/RadioBtn';
function QuestionnairePP() {
  const {
    gettingQuestionnaire,
    questions,
    errorGettingQuestionnaire,
  } = useSelector(state => state.questionnaireReducer);
  const {
    data: {id},
  } = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const [localQuestion, setLocalQuestion] = useState([]);
  const [questionCurrentId, setQuestionCurrentId] = useState('');
  useEffect(() => {
    !gettingQuestionnaire && dispatch(GetQuestion(id));
    !gettingQuestionnaire && setLocalQuestion(questions);
  }, []);
  console.log('*************************8888888888888888888888**************');
  console.log(questions);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FancyHeader
        hideLeftComp
        hideRightComp
        headerText={'Questionnaire'}
        style={{Container: {height: '20%', overflow: 'hidden'}}}
      />
      <Container
        style={{
          height: '80%',
          transform: [
            {
              translateY: -30,
            },
          ],
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        {/* {questions.map(item => (
          <Text>{item.title}</Text>
        ))} */}
        {questions.length !== 0 && <QuestionController questions={questions} />}
      </Container>
    </View>
  );
}

export default QuestionnairePP;

const QuestionController = ({questions}) => {
  const [count, setCount] = useState(0);
  const nextQuestion = () => {
    if (count < questions.length) {
      setCount(count + 1);
      // if(count===questions.length-1){
      //   nextParent();
      // }
    }
  };

  return (
    <QuestionViewer
      question={questions[count]}
      nextQuestion={nextQuestion}
      count={count}
      questionLength={questions.length}
    />
  );
};

const QuestionViewer = ({question, nextQuestion, count, questionLength}) => {
  const [currentOptionId, setCurrentOptionId] = useState('');
  const [filteredLinkedQuestion, setFilteredLinkedQuestion] = useState([]);

  const onSetCurrentOptionId = id => {
    setCurrentOptionId(id);
    const OptionQues = question.option.find(item => item._id === id);
    setFilteredLinkedQuestion(OptionQues.linkedQuestion);
    if (OptionQues.linkedQuestion.length === 0) {
      nextQuestion();
    }
  };
  if (count === questionLength) {
    nextQuestion();
    console.log('compare wuesflk asdf');
  }
  console.log('&&&&&&&&&@@@@@@@@@@&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@7');
  // console.log(filteredLinkedQuestion);
  return (
    <View>
      <Text>{question ? question.title : ''}</Text>
      <RadioGroup
        Item={
          question &&
          question.option.map(item => {
            if (item.optionType === 'radio')
              return {
                id: item._id,
                value: item.text,
              };
          })
        }
        setActiveKey={onSetCurrentOptionId}
        activeKey={currentOptionId}
      />
      {question &&
        question.option.map(item => {
          if (item.optionType === 'text')
            return <AnimInput placeholder={item.text} />;
        })}
      {filteredLinkedQuestion.length ? (
        <QuestionController questions={filteredLinkedQuestion} />
      ) : null}
      {/* {(() => {
        if (filteredLinkedQuestion.length)
          return <QuestionController questions={filteredLinkedQuestion} />;
        else return null;
      })()} */}
    </View>
  );
};
