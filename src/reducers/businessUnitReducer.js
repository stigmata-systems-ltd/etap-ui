import { act } from 'react-dom/test-utils';
import { BUSINESS_UNIT_STATUS, 
    BUSINESS_UNIT_TYPE,
     CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS, 
     GET_BU_LIST,
      RESET_CREATE_BUSINESS_UNIT_FORM, 
      SET_BUSINESS_UNIT_EDIT_MODE, 
      SHOW_ADD_BUSINESS_UNIT_MSG,
      LIST_BUSINESS_UNIT,
      ADD_BUSINESS_UNIT,
      UPDATE_BUSINESS_UNIT
     } from '../actions/types';

const initialState = {
    businessUnitType: '',
    businessUnitList:"",
    businessUnitTypeList:"",
    isAddBusinessUnitMsg: false,
    businessUnitName:'',
    businessUnitStatus:'',
    isEditMode:false,
    isLoading:false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case BUSINESS_UNIT_TYPE:
            return {
                ...state,
                businessUnitType: action.payload,
            };
        case BUSINESS_UNIT_STATUS:
            return {
                ...state,
                businessUnitStatus: action.payload
            }
        
        case RESET_CREATE_BUSINESS_UNIT_FORM:
            return {
                ...state,
                businessUnitType: '',
                businessUnitStatus: '',
                businessUnitName: '',
                isLoading: false
                
            };
            
        case SHOW_ADD_BUSINESS_UNIT_MSG:
            return {
                ...state,
                showAddBusinessUnitMessage: action.payload
            }
        case CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS:
            return {
                    ...state,
                    showAddBusinessUnitModal: action.payload
             }
        
        case SHOW_ADD_BUSINESS_UNIT_MSG:
                return {
                    ...state,
                    showAddBusinessUnitMessage: true
                }
        case `${LIST_BUSINESS_UNIT}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
        case `${LIST_BUSINESS_UNIT}_REJECTED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                };
        case `${LIST_BUSINESS_UNIT}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  structureFamilyTypeList: action.payload.data,
                };
        case `${ADD_BUSINESS_UNIT}_PENDING`:
                    return {
                      ...state,
                      isLoading: true,
                      isError: false,
                      isSuccess: false,
                    };
        case `${ADD_BUSINESS_UNIT}_REJECTED`:
                    return {
                      ...state,
                      isLoading: false,
                      isError: true,
                      isSuccess: false,
                      message:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.message
            : "Please check your form data and retry",
                    };
        case `${ADD_BUSINESS_UNIT}_FULFILLED`:
                    return {
                      ...state,
                      isLoading: false,
                      isError: false,
                      isSuccess: false,
                      message: action.payload.data.message,
                    };
        case `${UPDATE_BUSINESS_UNIT}_PENDING`:
                return {
                          ...state,
                          isLoading: true,
                          isError: false,
                          isSuccess: false,
                        };
        case `${UPDATE_BUSINESS_UNIT}_REJECTED`:
                return {
                          ...state,
                          isLoading: false,
                          isError: true,
                          isSuccess: false,
                          message:
              action.payload.response && action.payload.response.data
                ? action.payload.response.data.message
                : "Please check your form data and retry",
                        };
        case `${UPDATE_BUSINESS_UNIT}_FULFILLED`:
                return {
                          ...state,
                          isLoading: false,
                          isError: false,
                          isSuccess: false,
                          message: action.payload.data.message,
                        };
        case SET_BUSINESS_UNIT_EDIT_MODE:
                return {
                    ...state,
                    isEditMode: action.payload,
                };
        case `${GET_BU_LIST}_FULFILLED`:
            return {
                ...state,
                structureFamilyTypeID:action.payload.data.id,
                structureFamilyType: action.payload.data.name,
                structureFamilyTypeStatus: action.payload.data.isActive
            }
        case `${GET_BU_LIST}_PENDING`:
            return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
        case `${GET_BU_LIST}_REJECTED`:
            return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                  message:
      action.payload.response && action.payload.response.data
        ? action.payload.response.data.message
        : "Please check your form data and retry",
                };
        default:
            return state;
    }
}
