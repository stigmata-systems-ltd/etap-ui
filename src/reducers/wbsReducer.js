import { act } from 'react-dom/test-utils';
import {
    WORK_BREAK_PROJECT_NAME,
    RESET_WBS_FORM,
    WBS_UPLOADED_DATA,
    LIST_PROJECT_CODES
} from '../actions/types';

const initialState = {
    componentType: '',
    isAddComponentMsg: false,
    componentTypeID:'',
    componentTypeStatus:'',
    listProjectCodes: []

};

export default function (state = initialState, action) {
    switch (action.type) {
        case WORK_BREAK_PROJECT_NAME:
            return {
                ...state,
                wbsProjectName: action.payload,
            };
        case WBS_UPLOADED_DATA:
            return {
                ...state,
                wbsUploadedData: action.payload
            }
        
        case RESET_WBS_FORM:
            return {
                ...state,
                wbsProjectName: '',
                wbsUploadedData: '',
                isLoading: false
            };
            case `${LIST_PROJECT_CODES}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
        case `${LIST_PROJECT_CODES}_REJECTED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                };
        case `${LIST_PROJECT_CODES}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  projectCodesList: action.payload.data,
                };            
        
        default:
            return state;
    }
}
