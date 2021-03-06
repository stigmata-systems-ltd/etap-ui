import {
    SET_USERNAME,
    SET_PASSWORD,
    AUTHENTICATE_USER,
    SET_TOKEN,
    RESET_LOGIN_DETAILS,
    SET_PAGE_ACCESS,
    SET_ROLE_BASED_ROUTE_ACCESS,
  } from "../actions/types";
  
  const initialState = {
    username: "",
    password: "",
    isLoginError: false,
    pageAccess: null,
    isRender:false,
    isAuthenticated: false,
    token:{}
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
      case SET_PASSWORD:
        return {
          ...state,
          password: action.payload,
        };
      case `${AUTHENTICATE_USER}_PENDING`:
        return {
          ...state,
          isLoginLoading: true,
        };
      case `${AUTHENTICATE_USER}_FULLFILLED`:
        return {
          ...state,
          loginMessage: action.payload,
          isLoginLoading: false,
        };
      case `${AUTHENTICATE_USER}_REJECTED`:
        return {
          ...state,
          isLoginError: true,
          loginMessage: action.payload.response.data.errors
            ? action.payload.response.data.errors.Password[0]
            : action.payload.response.data.message,
          isLoginLoading: false,
        };
      case SET_TOKEN:
        return {
          ...state,
          token: action.payload,
          isAuthenticated: action.payload.isAuthenticated ? action.payload.isAuthenticated : true,
        };
      case RESET_LOGIN_DETAILS:
        return {
          ...state,
          username: "",
          password: "",
          isLoginError: false,
        };
      case `${SET_PAGE_ACCESS}_FULFILLED`:
        return {
          ...state,
          pageAccess: action.payload.data,
        };
      case SET_ROLE_BASED_ROUTE_ACCESS:
        return {
          ...state,
          allowedRoutes: action.payload,
          isRender: true
        };
      default:
        return state;
    }
  }
  