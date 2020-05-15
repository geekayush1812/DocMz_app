const inititalState = {
      isMyDoctorReducerLoading: false,
      doctorProfile: null,
      haveingMyDoctorReducerError : [],
}


const MyDoctorReducer = (state = inititalState, action) => {
      switch(action.type) {
            case 'SAVE_MY_DOCTOR':
                  return {
                        ...state,
                        doctorProfile: action.payload,
                        haveingMyDoctorReducerError: false,
                        isMyDoctorReducerLoading: false
                  }
            case 'HAVEING_MY_DOCTOR_REDUCER_ERROR': 
                  return {
                        ...state,
                        error: action.payload,
                        isMyDoctorReducerLoading: false
                  }
            case 'START_MY_DOCTOR_REDUCER_LOADING':
                  return {
                        ...state,
                        isMyDoctorReducerLoading: true
                  }
            case 'RESET_MY_DOCTOR_REDUCER': 
                  return {
                        isMyDoctorReducerLoading: false,
                        doctorProfile: null,
                        haveingMyDoctorReducerError: [],
                  }
            default: return state
      }
}     

export default MyDoctorReducer