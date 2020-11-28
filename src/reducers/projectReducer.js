import {
    PROJECT_NAME,
    SEGMENT,
    AREA,
    PROJECT_BUSINESS_UNIT,
    SITE_LOCATION,
    PROJECT_INDEPENDENT_COMPANY,
    RESET_STRUCTURE_FORM,

} from '../actions/types';

const initialState = {
    projectName: '',
    segment: '',
    area: '',
    businessUnit: '',
    siteLocation: '',
    independentCompany: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload,
            };
        case SEGMENT:
            return {
                ...state,
                segment: action.payload,
            };
        case AREA:
            return {
                ...state,
                area: action.payload,
            };
        case PROJECT_BUSINESS_UNIT:
            return {
                ...state,
                businessUnit: action.payload,
            };
        case SITE_LOCATION:
            return {
                ...state,
                siteLocation: action.payload,
            };
        case PROJECT_INDEPENDENT_COMPANY:
            return {
                ...state,
                independentCompany: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                projectName: '',
                segment: '',
                area: '',
                businessUnit: '',
                siteLocation: '',
                independentCompany: ''
            };
        default:
            return state;
    }
}
