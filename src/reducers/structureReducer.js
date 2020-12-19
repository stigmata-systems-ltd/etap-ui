import {
  STRUCTURE_NAME,
  LIST_STRUCTURE,
  RESET_STRUCTURE_FORM,
  STRUCTURE_FAMILY,
  NUMBER_OF_ATTRIBUTES,
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  STRUCTURE_ATTRIBUTE_LIST,
  ADD_STRUCTURE
} from '../actions/types';

const initialState = {
  structureName: '',
  structureFamily: '',
  noOfAttributes: '',
  attributeList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STRUCTURE_NAME:
      return {
        ...state,
        structureName: action.payload,
      };
    case STRUCTURE_FAMILY:
      return {
        ...state,
        structureFamily: action.payload,
      };
    case NUMBER_OF_ATTRIBUTES:
      return {
        ...state,
        noOfAttributes: action.payload,
      };

    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        structureName: '',
        structureFamily: '',
        attributeList: '',
      };
      
      case CHANGE_ADD_STRUCTURE_MODAL_STATUS:
      return {
        ...state,
        showAddStructureModal: action.payload,
      };
      case STRUCTURE_ATTRIBUTE_LIST:
        return {
          ...state,
          attributeList: action.payload
        };
      case `${LIST_STRUCTURE}_PENDING`:
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
        };
    case `${LIST_STRUCTURE}_REJECTED`:
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
        };
    case `${LIST_STRUCTURE}_FULFILLED`:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: false,
          structureList: action.payload.data,
        };
        case `${ADD_STRUCTURE}_PENDING`:
          return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false,
          };
case `${ADD_STRUCTURE}_REJECTED`:
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
case `${ADD_STRUCTURE}_FULFILLED`:
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
