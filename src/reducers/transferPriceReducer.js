import {
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_ACTIVE_ITEM,
    SET_TRANSFER_PRICE_DETAILS,
    TRANSFER_PRICE,
    RESET_UPDATE_TRANSFER_PRICE_MODAL,
} from "../actions/types";
const initialState = {
    isLoading: false,
    showEditModalFlag: false,
    isError: false,
    isSuccess: false,
    message: "",
    transferPriceDetails: [],
    activeItem: {},
    transferPrice: "",

};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_TRANSFER_PRICE_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_TRANSFER_PRICE_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_TRANSFER_PRICE_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                transferPriceDetails: action.payload.data,
            };
        case TRANSFER_PRICE:
            return {
                ...state,
                transferPrice: action.payload
            };

        case SET_ACTIVE_ITEM:
            const activeItem = state.transferPriceDetails.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };
        case SET_SHOW_EDIT_MODAL_FLAG:
            return { ...state, showEditModalFlag: action.payload };

        case RESET_UPDATE_TRANSFER_PRICE_MODAL:
            return {
                ...state,
                isLoading: false,
                showEditModalFlag: false,
                isError: false,
                isSuccess: false,
                message: "",
                transferPriceDetails: [],
                activeItem: {},
                transferPrice: "",
            };
        default:
            return state;
    }
};
