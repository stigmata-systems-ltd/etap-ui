import {

    BUSINESS_UNIT,
    BU_NAME,
    GET_BU_LIST,
    GET_IC_LIST,
    GET_SINGLE_ICBU,
    IC_NAME,
    INDEPENDENT_COMPANY,
    LIST_ICBU,
    RESET_ICBU_FORM,
    RESET_PROJECT_FORM,
    RESET_STRUCTURE_FORM,
    SET_EDIT_MODE,
    SHOW_ADD_ICBU_MODAL,
    SHOW_ERR_MSG,
} from "../actions/types";


const initialState = {

    
    icId: "",
    lstBussUnit: {},
    icbuList: [],
    isIcbuMsg: "",
    isEditMode: false,
    showAddIcbuModal: false,
    singleIcbu: {},
    buList: [],
    icList: [],
    

};

export default function (state = initialState, action) {
    switch (action.type) {
        case IC_NAME:
            return {
                ...state,
                icId: action.payload,
            };
        case BU_NAME:
            return {
                ...state,
                lstBussUnit: action.payload,
            };

        case BUSINESS_UNIT:
            return {
                ...state,
                bu: action.payload,
            };
        case INDEPENDENT_COMPANY:
            return {
                ...state,
                ic: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                icId: "",
                lstBussUnit: {},
            };
        case `${LIST_ICBU}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${LIST_ICBU}_REJECTED`:
            return {
                ...state,
                isLoading: false,
            };
        case `${LIST_ICBU}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                icbuList: action.payload.data,
            };
        case SHOW_ADD_ICBU_MODAL:
            return {
                ...state,
                showAddIcbuModal: action.payload,
            };
        case SET_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.payload,
            };
        case `${GET_SINGLE_ICBU}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${GET_SINGLE_ICBU}_REJECTED`:
            return {
                ...state,
                isLoading: false,
            };
        case `${GET_SINGLE_ICBU}_FULFILLED`:
            const icbu = action.payload.data;
            return {
                ...state,
                isLoading: false,
                icId: icbu.icId,
                lstBussUnit: icbu.lstBussUnit,

            };
        case `${GET_IC_LIST}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${GET_IC_LIST}_REJECTED`:
            return {
                ...state,
                isLoading: false,
            };
        case `${GET_IC_LIST}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                icList: action.payload.data,
            };

        case `${GET_BU_LIST}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${GET_BU_LIST}_REJECTED`:
            return {
                ...state,
                isLoading: false,
            };
        case `${GET_BU_LIST}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                buList: action.payload.data,
            };
        case RESET_ICBU_FORM:
            return {
                ...state,
                isLoading: false,
                icId: "",
                lstBussUnit: {},

            };
        case SHOW_ERR_MSG:
            return {
                ...state,
                isIcbuMsg: action.payload,
            };

        default:
            return state;
    }
}
