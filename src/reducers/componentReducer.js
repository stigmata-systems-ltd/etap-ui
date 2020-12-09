import { act } from 'react-dom/test-utils';
import {
    COMPONENT_TYPE,
    RESET_STRUCTURE_FORM,
    LIST_COMPONENT,
    CHANGE_ADD_COMPONENT_MODAL_STATUS,
    SHOW_ADD_COMPONENT_MSG,
    ADD_COMPONENT_TYPE
} from '../actions/types';

const initialState = {
    componentType: '',
    isAddComponentMsg: false,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case COMPONENT_TYPE:
            return {
                ...state,
                componentType: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                componentType: '',

            };
        case SHOW_ADD_COMPONENT_MSG:
            return {
                ...state,
                showAddComponentMessage: action.payload
            }
        case CHANGE_ADD_COMPONENT_MODAL_STATUS:
            return {
                    ...state,
                    showAddComponentModal: action.payload
             }
        
        case SHOW_ADD_COMPONENT_MSG:
                return {
                    ...state,
                    showAddComponentMessage: true
                }
            case `${LIST_COMPONENT}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
              case `${LIST_COMPONENT}_REJECTED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                };
              case `${LIST_COMPONENT}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  componentTypeList: action.payload.data,
                };
                case `${ADD_COMPONENT_TYPE}_PENDING`:
                    return {
                      ...state,
                      isLoading: true,
                      isError: false,
                      isSuccess: false,
                    };
                  case `${ADD_COMPONENT_TYPE}_REJECTED`:
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
                  case `${ADD_COMPONENT_TYPE}_FULFILLED`:
                    return {
                      ...state,
                      isLoading: false,
                      isError: false,
                      isSuccess: false,
                      message: action.payload.data.message,
                    };
        default:
            return state;
    }
}
