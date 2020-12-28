import {
    PROJECT_NAME,
    STRUCTURE_NAME,
    STRUCTURE_ID,
    NUMBER_OF_COMPONENTS,
    DRAWING_NO,
    QUANTITY,
    REQUIRED_FOR_WORK_BREAK,
    REQUIRED_BY,
    ACTUAL_WORK_BREAK,
    PLANNED_START_DATE,
    ACTUAL_START_DATE_OF_USAGE,
    PLANNED_RELEASE_DATE,
    EXPECTED_RELEASE_DATE,
    MR_NUMBER,
    REMARKS,
    RESET_REQUIREMENT_FORM,
    LIST_PROJECT_CODES, 
    LIST_WBS_CODES,
    SITE_REQUIRMENT_LIST,
    ADD_REQUIREMENT
} from '../actions/types';

const initialState = {
    vendorName: '',
    vendorCode: '',
    vendorEmail: '',
    contactNumber: '',
    siteRequirementList:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROJECT_NAME:
        return {
          ...state,
          projectName: action.payload,
        };
        case REQUIRED_FOR_WORK_BREAK:
        return {
          ...state,
          requiredWorkBreak: action.payload,
        };
        case ACTUAL_WORK_BREAK:
        return {
          ...state,
          actualWorkBreak: action.payload,
        };
        case PLANNED_START_DATE:
        return {
          ...state,
          planedStartDate: action.payload,
        };
        case ACTUAL_START_DATE_OF_USAGE:
        return {
          ...state,
          actualStartDateOfUsage: action.payload,
        };
        case PLANNED_RELEASE_DATE:
        return {
          ...state,
          plannedReleaseDate: action.payload,
        };
        case EXPECTED_RELEASE_DATE:
        return {
          ...state,
          expectedReleaseDate: action.payload,
        };
        case REMARKS:
        return {
          ...state,
          remarks: action.payload,
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
        case `${LIST_WBS_CODES}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
        case `${LIST_WBS_CODES}_REJECTED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  isSuccess: false,
                };
        case `${LIST_WBS_CODES}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  wbsCodesList: action.payload.data,
                };  
        case SITE_REQUIRMENT_LIST:
            return {
                ...state,
                siteRequirementList: action.payload
            }
        case `${ADD_REQUIREMENT}_PENDING`:
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                  isSuccess: false,
                };
        case `${ADD_REQUIREMENT}_REJECTED`:
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
        case `${ADD_REQUIREMENT}_FULFILLED`:
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  isSuccess: false,
                  message: action.payload.data.message,
                };
        case RESET_REQUIREMENT_FORM:
            return {
                ...state,
                "projectId": {},
        "planStartdate": '',
        "planReleasedate": '',
        "actualStartdate": '',
        "actualReleasedate": '',
        "requireWbsId": {},
        "actualWbsId": {},
        "remarks": '',
        "status": '',
        "siteRequirementStructures": [],
        actualStartDateOfUsage: "",
        actualWorkBreak:{},
        expectedReleaseDate:"",
        planedStartDate:"",
        plannedReleaseDate:"",
        projectName:{},
        requiredWorkBreak:{},
        siteRequirementList:[]
            }
        default:
            return state;
    }
}
