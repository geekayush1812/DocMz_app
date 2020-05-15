const initialState = {
      isPatientAccountReducerLoading : true,
      patient: null,
      errorInPatientAccountReducer: [],
      patientFavDoc: []
}

const PatientAccountReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'SAVE_PATIENT_INFO': {
                  return {
                        ...state,
                        patient: action.payload,
                        isPatientAccountReducerLoading: false,
                        errorInPatientAccountReducer: []
                  }
            }
            case 'SAVE_PATIENT_FEV_DOC': {
                  return {
                        ...state,
                        patientFavDoc: [...patientFavDoc, action.payload]
                  }
            }
            case 'START_PATIENT_ACCOUNT_LOADING': {
                  return {
                        ...state,
                        isPatientAccountReducerLoading: true
                  }
            }
            case 'HAVEING_ERROR_IN_PATIENT_ACCOUNT_REDUCER': {
                  return {
                        ...state,
                        errorInPatientAccountReducer: action.payload,
                        isPatientAccountReducerLoading: false
                  }
            }
            case 'RESET_PATIENT_ACCOUNT_REDUCER': {
                  return {
                        isPatientAccountReducerLoading : true,
                        patient: null,
                        errorInPatientAccountReducer: []
                  }
            }
            default: return state
      }
}

export default PatientAccountReducer;