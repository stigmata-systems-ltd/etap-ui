import {
  GET_PROJECT_LIST,
  PROJECT_NAME,
  GET_STRUCT_LIST,
  STRUCTURE_NAME,
  STRUCTURE_TYPE,
  DRAWING_NO,
  ASSIGN_STRUCT_UPLOADED_DATA,
  ESTIMATED_WEIGHT,
  NUMBER_OF_COMPONENTS,
  ASSIGN_FILE_UPLOAD,
} from "../actions/types";

const initialState = {
  projList: [],
  structList: [],
  projName: {},
  structName: {},
  structFamily: "",
  drawingNum: "",
  uploadData: [],
  estimatedWeight: "",
  noOfComponents: "",
  files: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${GET_PROJECT_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_PROJECT_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_PROJECT_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        projList: action.payload.data,
      };
    case PROJECT_NAME:
      return {
        ...state,
        projName: action.payload,
      };
    case `${GET_STRUCT_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_STRUCT_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_STRUCT_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        structList: action.payload.data,
      };
    case STRUCTURE_NAME:
      return {
        ...state,
        structName: action.payload,
      };
    case STRUCTURE_TYPE:
      return {
        ...state,
        structFamily: action.payload,
      };
    case DRAWING_NO:
      return {
        ...state,
        drawingNum: action.payload,
      };
    case ASSIGN_STRUCT_UPLOADED_DATA:
      return {
        ...state,
        uploadData: action.payload,
      };
    case ESTIMATED_WEIGHT:
      return {
        ...state,
        estimatedWeight: action.payload,
      };
    case NUMBER_OF_COMPONENTS:
      return {
        ...state,
        noOfComponents: action.payload,
      };
    case ASSIGN_FILE_UPLOAD:
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
}
