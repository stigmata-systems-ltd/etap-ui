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
    INDEPENDENT_COMPANY
    
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
    independentCompany:''
    
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
      default:
        return state;
    }
  }
  