import { SET_SELECTED_ITEMS, GET_SITE_REQ_DETAILS } from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  siteReqDetails: [],
  selectedItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SITE_REQ_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SITE_REQ_DETAILS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${GET_SITE_REQ_DETAILS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        siteReqDetails: action.payload.data,
      };
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload,
      };

    default:
      return state;
  }
};
