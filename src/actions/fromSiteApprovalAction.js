import axios from "axios";
import store from "../store";
import config from "../config";
import {

    GET_FROM_SITE_APPROVAL_DATA_SINGLE,
    SET_FROM_SITE_APPROVAL_DETAILS,
    ACTION_FROM_SITE_APPROVAL,

} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getFromSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_FROM_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const fromSiteApprovalAction = (id, action) => {
    const ROLE_NAME = getUserDetails().roleName;
    let fromSiteApprovalList = store.getState().fromSiteApproval.fromSiteApprovalList;
    let singleFromSiteApproval = fromSiteApprovalList[id];
    const body = {
        "siteReqId": singleFromSiteApproval.id,
        "mode": action,
        "role_name": ROLE_NAME,
    }

    return {
        type: ACTION_FROM_SITE_APPROVAL,
        payload: axios.post(config.BASE_URL + '​/api​/SiteRequirement​/WorkflowManagement', body)
    }
}

export const singleFromSiteApprovalFetch = (id) => {
    const fromSiteApproval = store.getState().fromSiteApproval;
    const data = fromSiteApproval.fromSiteApprovalList[id];
    return {
        type: GET_FROM_SITE_APPROVAL_DATA_SINGLE,
        payload: data,
    };
}