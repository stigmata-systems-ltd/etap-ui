import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_TYPE,
  CAPACITY,
  OVER_ALL_LENGTH,
  UNDER_SLING_OVER_SLUNG,
  ESTIMATED_WEIGHT,
  DIAMENSION_LENGTH,
  DIAMENSION_HEIGHT,
  DIAMENSION_WIDTH,
  NUMBER_OF_COMPONENTS,
  RESET_STRUCTURE_FORM,
  DRAWING_NO
} from '../actions/types';

const initialState = {
  projectName: '',
  structureName: '',
  structureType: '',
  capacity: '',
  drawingNumber: '',
  overAllLength: '',
  underSlungOverSlung: '',
  estimatedWeight: '',
  diamensionLenght: '',
  diamensionHeight: '',
  diamensionWidth: '',
  noOfComponents: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload,
      };
    case STRUCTURE_NAME:
      return {
        ...state,
        structureName: action.payload,
      };
    case STRUCTURE_TYPE:
      return {
        ...state,
        structureType: action.payload,
      };
    case CAPACITY:
      return {
        ...state,
        capacity: action.payload,
      };
    case DRAWING_NO:
      return {
        ...state,
        drawingNumber: action.payload,
      };
    case OVER_ALL_LENGTH:
      return {
        ...state,
        overAllLength: action.payload,
      };
    case UNDER_SLING_OVER_SLUNG:
      return {
        ...state,
        underSlungOverSlung: action.payload,
      };
    case ESTIMATED_WEIGHT:
      return {
        ...state,
        estimatedWeight: action.payload,
      };
    case DIAMENSION_LENGTH:
      return {
        ...state,
        diamensionLenght: action.payload,
      };
    case DIAMENSION_HEIGHT:
      return {
        ...state,
        diamensionHeight: action.payload,
      };
    case DIAMENSION_WIDTH:
      return {
        ...state,
        diamensionWidth: action.payload,
      };
    case NUMBER_OF_COMPONENTS:
      return {
        ...state,
        noOfComponents: action.payload,
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        projectName: '',
        structureName: '',
        structureType: '',
        capacity: '',
        drawingNumber: '',
        overAllLength: '',
        underSlungOverSlung: '',
        estimatedWeight: '',
        diamensionLenght: '',
        diamensionHeight: '',
        diamensionWidth: '',
        noOfComponents: '',
      };
    default:
      return state;
  }
}
