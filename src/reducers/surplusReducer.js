import {
  SURPLUS_STRUCTURE_ID,
  SURPLUS_DATE,
  SURPLUS_UPLOAD,
  SURPLUS_LIST_STRUCTURE_PROJECT_DATA,
  LIST_PROJECT_CODES,
  SURPLUS_PROJECT_ID,
  ADD_SURPLUS,
  RESET_SURPLUS_FORM,
  SURPLUS_FILE
} from '../actions/types';

const initialState = {
    structureID:{},
    dateFrom:"",
    upload:[],
    structureProjectList:[],
    projectCodesList:[],
    structureList:[],
    projectID:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SURPLUS_STRUCTURE_ID:
        return {
          ...state,
          structureID: action.payload,
        };
        case SURPLUS_FILE:
        return {
          ...state,
          surplusFile: action.payload,
        };
        
        case SURPLUS_PROJECT_ID:
        return {
          ...state,
          projectName: action.payload,
        };
        case SURPLUS_DATE:
        return {
          ...state,
          dateFrom: action.payload,
        };
        case SURPLUS_UPLOAD:
        return {
          ...state,
          upload: action.payload,
        };
        case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_PENDING`:
          return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false,
          };
  case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_REJECTED`:
          return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false,
          };
  case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_FULFILLED`:
          console.log(`Project Name: ${state.projectName}`)
          let structureListData= action.payload.data.filter((ele) => {
            if(ele.projectId === state.projectName.value) {
              return {id:ele.structureId, name: ele.strcutureName}
            }
          }).map((ele) => {return {id:ele.structureId, name: ele.strcutureName}});
          return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: false,
            structureProjectList: action.payload.data,
            structureList:structureListData
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
            case `${ADD_SURPLUS}_PENDING`:
              return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
              };
      case `${ADD_SURPLUS}_REJECTED`:
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
      case `${ADD_SURPLUS}_FULFILLED`:
              return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: false,
                message: action.payload.data.message,
              };
      case RESET_SURPLUS_FORM:
          return {
              ...state,
              structureID:{},
              projectName:{},
              dateFrom:""

          }
        default:
            return state;
    }
}
