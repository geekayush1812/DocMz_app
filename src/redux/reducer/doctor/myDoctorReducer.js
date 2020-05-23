const inititalState = {
  isMyDoctorReducerLoading: false,
  doctorProfile: null,
  haveingMyDoctorReducerError: [],
  appointmentLoading: false,
  appointments: [],
  appointmentFetchError: '',
};

const MyDoctorReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'SAVE_MY_DOCTOR':
      return {
        ...state,
        doctorProfile: action.payload,
        haveingMyDoctorReducerError: false,
        isMyDoctorReducerLoading: false,
      };
    case 'HAVEING_MY_DOCTOR_REDUCER_ERROR':
      return {
        ...state,
        error: action.payload,
        isMyDoctorReducerLoading: false,
      };
    case 'START_MY_DOCTOR_REDUCER_LOADING':
      return {
        ...state,
        isMyDoctorReducerLoading: true,
      };
    case 'RESET_MY_DOCTOR_REDUCER':
      return {
        isMyDoctorReducerLoading: false,
        doctorProfile: null,
        haveingMyDoctorReducerError: [],
      };
    case 'APPOINTMENT_LOADING':
      return {
        ...state,
        appointmentLoading: true,
      };
    case 'APPOINTMENT_LOADED':
      return {
        ...state,
        appointments: action.payload,
        appointmentLoading: false,
      };
    case 'ERROR_APPOINTMENT_FETCHING':
      return {
        ...state,
        appointmentFetchError: action.payload,
        appointmentLoading: false,
      };
    default:
      return state;
  }
};

export default MyDoctorReducer;
