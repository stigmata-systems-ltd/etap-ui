import {
    INDEPENDENT_COMPANY,
    BUSINESS_UNIT,
    RESET_STRUCTURE_FORM,

} from '../actions/types';

const initialState = {
    independentCompany: '',
    businessUnit: '',

};

export default function (state = initialState, action) {
    switch (action.type) {
        case INDEPENDENT_COMPANY:
            return {
                ...state,
                independentCompany: action.payload,
            };
        case BUSINESS_UNIT:
            return {
                ...state,
                businessUnit: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                independentCompany: '',
                businessUnit: '',

            };
        default:
            return state;
    }
}
