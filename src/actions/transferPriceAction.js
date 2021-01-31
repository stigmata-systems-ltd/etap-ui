import axios from "axios";
import store from "../store";
import config from "../config";
import {
    SET_TRANSFER_PRICE_DETAILS,
    TRANSFER_PRICE
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getTransferPriceDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_TRANSFER_PRICE_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const addTransferPrice = () => {
    const transferPrice = store.getState().transferPrice;
    const data = {

        "transferPrice": transferPrice.transferPrice
    };
    return {
        type: TRANSFER_PRICE,
        payload: axios.post(config.BASE_URL + "/api/SiteDispatch/DispatchTransferPrice", data),
    };
};