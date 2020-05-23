import axios from 'axios';
import {Host} from '../../../utils/connection';

const save = 'SAVE_MY_DOCTOR';
const loading = 'START_MY_DOCTOR_REDUCER_LOADING';
const err = 'HAVEING_MY_DOCTOR_REDUCER_ERROR';
const reset = 'RESET_MY_DOCTOR_REDUCER';
const APPOINTMENT_LOADING = 'APPOINTMENT_LOADING';
const APPOINTMENT_LOADED = 'APPOINTMENT_LOADED';
const ERROR_APPOINTMENT_FETCHING = 'ERROR_APPOINTMENT_FETCHING';

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

const startAppointmentLoading = () => {
  return {
    type: APPOINTMENT_LOADING,
  };
};

const appointmentLoaded = appointments => {
  return {
    type: APPOINTMENT_LOADED,
    payload: appointments,
  };
};

const errorFetchingAppointments = err => {
  return {
    type: ERROR_APPOINTMENT_FETCHING,
    payload: err,
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
    dispatch(startLoading());
    const __params = {
      limit: limit,
      doctror: id,
      // doctor: '5dad6ba6f4ab551864e63f00',
      date: new Date().toISOString(),
      // date: '2020-04-25T10:24:39.736Z',
    };

    axios.get(`${Host}/doctors/getdoc/${__params.doctor}`).then(result => {
      if (result.data.status) {
        dispatch(saveDoc(result.data.data));
      } else {
        console.log('someting wrong');
        dispatch(haveingError(result.data.message));
      }
    });
  };
};

export const FetchAppointments = (docId, date) => {
  return async dispatch => {
    const data = {
      docId,
      date,
    };
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    dispatch(startAppointmentLoading());
    try {
      const req = await axios.post(
        `${Host}/doctors/appointment/next`,
        data,
        config,
      );
      const response = req.data;
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      let appointments = response.data.appointments;
      appointments = appointments
        .filter(item => {
          const date = new Date(item.bookedFor);
          const bookedDate = date.getDate();
          const bookedYear = date.getFullYear();
          const bookedMonth = date.getMonth();
          const now = new Date();
          const nowDate = now.getDate();
          const nowYear = now.getFullYear();
          const nowMonth = now.getMonth();
          return (
            bookedDate === nowDate &&
            bookedYear === nowYear &&
            bookedMonth === nowMonth
          );
        })
        .sort((a, b) => {
          return a.bookedFor - b.bookedFor;
        });
      dispatch(appointmentLoaded(appointments));
    } catch (e) {
      console.log(e);
      dispatch(errorFetchingAppointments(e));
    }
  };
};
