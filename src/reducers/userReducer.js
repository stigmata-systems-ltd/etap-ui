import {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PS_NO,
    USER_ROLE,
    RESET_STRUCTURE_FORM,
    PROJECT,
    BUSINESS_UNIT,
    SEGMENT,
    INDEPENDENT_COMPANY,
    LIST_USERS,
    CHANGE_ADD_USERS_MODAL_STATUS,
    SHOW_ADD_USERS_MSG,
    LIST_PROJECT_CODES,
    GET_PROJECT_DETAILS,
    GET_ROLES_LIST,
  } from '../actions/types';
  
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    psNo: '',
    project : '',
    role : '',
    businessUnit:'',
    segment:'',
    independentCompany:'',
    usersList:[],
    showAddUsersModal: false,
    listProjectCodes: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FIRST_NAME:
        return {
          ...state,
          firstName: action.payload,
        };
      case LAST_NAME:
        return {
          ...state,
          lastName: action.payload,
        };
      case EMAIL:
        return {
          ...state,
          email: action.payload,
        };
      case PS_NO:
        return {
          ...state,
          psNo: action.payload,
        };
      case PROJECT:
        return {
          ...state,
          project: action.payload,
        };
      case BUSINESS_UNIT:
        return {
          ...state,
          businessUnit: action.payload,
        };
      case SEGMENT:
        return {
          ...state,
          segment: action.payload,
        };
      case INDEPENDENT_COMPANY:
        return {
          ...state,
          independentCompany: action.payload,
        };
      case USER_ROLE:
        return {
          ...state,
          role: action.payload,
        };
      case RESET_STRUCTURE_FORM:
        return {
          ...state,
          firstName: '',
          lastName: '',
          role: '',
        };
      case `${LIST_USERS}_PENDING`:
          return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false,
          };
      case `${LIST_USERS}_REJECTED`:
          return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false,
          };
      case `${LIST_USERS}_FULFILLED`:
          return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: false,
            usersList: action.payload.data,
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
      case `${GET_PROJECT_DETAILS}_PENDING`:
              return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
              };
      case `${GET_PROJECT_DETAILS}_REJECTED`:
              return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
              };
      case `${GET_PROJECT_DETAILS}_FULFILLED`:
              return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: false,
                bu: action.payload.data.buName,
                segment: action.payload.data.segmentName,
                ic: action.payload.data.icName,
              };
      case `${GET_ROLES_LIST}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
      case `${GET_ROLES_LIST}_REJECTED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                };
      case `${GET_ROLES_LIST}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  rolesList: action.payload.data 
                };         
      case CHANGE_ADD_USERS_MODAL_STATUS:
            return {
              ...state,
              showAddUsersModal: action.payload,
            };
             
      default:
        return state;
    }
  }
  