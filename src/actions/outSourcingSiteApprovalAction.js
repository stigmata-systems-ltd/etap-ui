import axios from "axios";
import store from "../store";
import config from "../config";
import {
ACTION_SITE_APPROVAL,
GET_SITE_APPROVAL_DATA_SINGLE,
SET_OUT_SOURCING_SITE_APPROVAL_DETAILS
} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getOutSourcingSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_OUT_SOURCING_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const siteApprovalAction = (id, action) => {
    const ROLE_NAME = getUserDetails().roleName;
    let siteApprovalList = store.getState().siteApproval.siteApprovalList;
    let singleSiteApproval = siteApprovalList[id];
    const body = {
        "siteReqId": singleSiteApproval.id,
        "mode": action,
        "role_name": ROLE_NAME,
    }

    return {
        type: ACTION_SITE_APPROVAL,
        payload: axios.post(config.BASE_URL + '​/api​/SiteRequirement​/WorkflowManagement', body)
    }
}

export const singleSiteApprovalFetch = (id) => {
    const siteApproval = store.getState().siteApproval;
    const data = siteApproval.siteApprovalList[id];
    return {
        type: GET_SITE_APPROVAL_DATA_SINGLE,
        payload: data,
    };
}