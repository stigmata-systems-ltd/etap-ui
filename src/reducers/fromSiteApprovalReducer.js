import {
    SET_FROM_SITE_APPROVAL_DETAILS,
    SET_ACTIVE_ITEM,
    RESET_UPDATE_FROM_SITE_APPROVAL_MODAL

} from "../actions/types";
const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    fromSiteApprovalDetails: [],
    activeItem: {},


};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_FROM_SITE_APPROVAL_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_FROM_SITE_APPROVAL_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_FROM_SITE_APPROVAL_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                fromSiteApprovalDetails: action.payload.data,
            };


        case SET_ACTIVE_ITEM:
            const activeItem = state.fromSiteApprovalDetails.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };

        case RESET_UPDATE_FROM_SITE_APPROVAL_MODAL:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: false,
                message: "",
                fromSiteApprovalDetails: [],
                activeItem: {},

            };
        default:
            return state;
    }
};
