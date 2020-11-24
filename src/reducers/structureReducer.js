import {
  ADD_STRUCTURE,
  STRUCTURE_TYPE,
  STRUCTURE_WEIGHT,
  STRUCTURE_NAME,
  DRAWING_NO,
  RESET_STRUCTURE_FORM,
  STRUCTURE_ID,
} from '../actions/types';

const initialState = {
  structureAdd: {},
  structureName: '',
  projectName: '',
  drawingNo: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STRUCTURE_NAME:
      return {
        ...state,
        structureName: action.payload,
      };
    case STRUCTURE_ID:
      return {
        ...state,
        structureID: action.payload,
      };
    case STRUCTURE_TYPE:
      return {
        ...state,
        structureType: action.payload,
      };
    case STRUCTURE_WEIGHT:
      return {
        ...state,
        structureWeight: action.payload,
      };
    case DRAWING_NO:
      return {
        ...state,
        drawingNo: action.payload,
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        structureName: '',
        projectName: '',
        drawingNo: '',
      };
    default:
      return state;
  }
}
