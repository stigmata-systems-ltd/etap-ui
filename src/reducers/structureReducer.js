import {
  STRUCTURE_NAME,

  RESET_STRUCTURE_FORM,

  STRUCTURE_FAMILY,
  NUMBER_OF_ATTRIBUTES
} from '../actions/types';

const initialState = {
  structureName: '',
  structureFamily: '',
  noOfAttributes: '',

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
        noOfAttributes: '',
       
      };
    default:
      return state;
  }
}
