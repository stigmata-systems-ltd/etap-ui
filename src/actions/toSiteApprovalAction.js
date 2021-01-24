import axios from "axios";
import store from "../store";
import config from "../config";
import {

    GET_TO_SITE_APPROVAL_DATA_SINGLE,
    SET_TO_SITE_APPROVAL_DETAILS,
    ACTION_TO_SITE_APPROVAL,

} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getToSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_TO_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const toSiteApprovalAction = (id, action) => {
    const ROLE_NAME = getUserDetails().roleName;
    let toSiteApprovalList = store.getState().toSiteApproval.toSiteApprovalList;
    let singleToSiteApproval = toSiteApprovalList[id];
    const body = {
        "siteReqId": singleToSiteApproval.id,
        "mode": action,
        "role_name": ROLE_NAME,
    }

    return {
        type: ACTION_TO_SITE_APPROVAL,
        payload: axios.post(config.BASE_URL + '​/api​/SiteRequirement​/WorkflowManagement', body)
    }
}

export const singleToSiteApprovalFetch = (id) => {
    const toSiteApproval = store.getState().toSiteApproval;
    const data = toSiteApproval.toSiteApprovalList[id];
    return {
        type: GET_TO_SITE_APPROVAL_DATA_SINGLE,
        payload: data,
    };
}