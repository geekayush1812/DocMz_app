import axios from 'axios';
import {Host} from '../../../utils/connection'

const save = 'SAVE_MY_DOCTOR';
const loading = 'START_MY_DOCTOR_REDUCER_LOADING';
const err = 'HAVEING_MY_DOCTOR_REDUCER_ERROR';
const reset = 'RESET_MY_DOCTOR_REDUCER';

const saveDoc = data => {
      return {
            type: save,
            payload: data,
      };
};

const startLoading = () => {
      return {
            type: loading,
      };
};

const haveingError = error => {
      return {
            type: err,
            payload: error,
      };
};

export const resetMyDoctorReducer = () => {
      return {
            type: reset,
      };
};

/*
       {
             "limit":"3", 
             "doctor":"5dad6ba6f4ab551864e63f01",
            "date":"2019-11-16T10:24:39.736Z"
       }
*/

export const GettingDocterLatestInfo = (id, limit = 3) => {
      return dispatch => {
            dispatch(startLoading())
            const __params = {
                  limit: limit,
                  //       doctror: id,
                  doctor: '5dad6ba6f4ab551864e63f00',
                  //       date: new Date().toISOString(),
                  date: '2020-04-25T10:24:39.736Z',
            };


            axios.get(`${Host}/doctors/getdoc/${__params.doctor}`)
                  .then(result => {
                        if (result.data.status) {
                              dispatch(saveDoc(result.data.data));

                        } else {
                              console.log('someting wrong')
                              dispatch(haveingError(result.data.message))
                        }
                  });
      };
}
