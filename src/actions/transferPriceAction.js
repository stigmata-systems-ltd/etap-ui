import axios from "axios";
import store from "../store";
import config from "../config";
import {
    SET_TRANSFER_PRICE_DETAILS
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