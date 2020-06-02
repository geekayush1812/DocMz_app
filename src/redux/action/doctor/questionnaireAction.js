import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Host} from '../../../utils/connection';

const ADDING_QUESTIONNAIRE = 'ADDING_QUESTIONNAIRE';
const QUESTIONNAIRE_ADDED = 'QUESTIONNAIRE_ADDED';
const ERROR_ADDING_QUESTIONNAIRE = 'ERROR_ADDING_QUESTIONNAIRE';
const GETTING_QUESTIONNAIRE = 'GETTING_QUESTIONNAIRE';
const GOT_QUESTIONNAIRE = 'GOT_QUESTIONNAIRE';
const ERROR_GETTING_QUESTIONNAIRE = 'ERROR_GETTING_QUESTIONNAIRE';

const startLoading = () => {
  return {
    type: ADDING_QUESTIONNAIRE,
  };
};
const questionnaireAdded = data => {
  return {
    type: QUESTIONNAIRE_ADDED,
    payload: data,
  };
};
const errorAddingQuestionnaire = err => {
  return {
    type: ERROR_ADDING_QUESTIONNAIRE,
    payload: err,
  };
};

const starGettingQuestionnaire = () => {
  return {
    type: GETTING_QUESTIONNAIRE,
  };
};

const gotQuestionnaire = questions => {
  return {
    type: GOT_QUESTIONNAIRE,
    payload: questions,
  };
};

const errorGettingQuestionnaire = err => {
  return {
    type: ERROR_GETTING_QUESTIONNAIRE,
    payload: err,
  };
};

export const AddQuestion = question => {
  return dispatch => {
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    dispatch(startLoading());
    const _data = question;
    axios
      .post(`${Host}/questionnaire/add`, _data, config)
      .then(res => {
        console.log('#######mmmmmmmmmmmmmm###########mmmmmmmmm#######');
        console.log(res.data);
        dispatch(questionnaireAdded(res.data));
      })
      .catch(e => {
        console.log('!!!!!!!!!@@@@@@@@@@########$$$$$$$$$$');
        dispatch(errorAddingQuestionnaire(e));
        console.log(e);
      });
  };
};

export const GetQuestion = id => {
  return dispatch => {
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    dispatch(starGettingQuestionnaire());
    const _data = {id};
    axios
      .post(`${Host}/questionnaire/get`, _data, config)
      .then(res => {
        if (res.status) {
          const questions = res.data.question.filter(item => item);
          dispatch(gotQuestionnaire(questions));
        } else {
          console.log(res);
          dispatch(errorGettingQuestionnaire(res.data));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(errorGettingQuestionnaire(err));
      });
  };
};
