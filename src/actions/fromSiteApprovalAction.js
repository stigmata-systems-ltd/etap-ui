import axios from "axios";
import store from "../store";
import config from "../config";
import {

    GET_FROM_SITE_APPROVAL_DATA_SINGLE,
    SET_FROM_SITE_APPROVAL_DETAILS,
    ACTION_FROM_SITE_APPROVAL,
    ACTION_FROM_SITE_DECLINE

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

export const fromSiteApprovalAction = (singleSiteApproval, action) => {
    const { roleId, roleName } = getUserDetails();
    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        "roleHierarchy": 3
    }

    return {
        type: ACTION_FROM_SITE_APPROVAL,
        payload: axios.post(config.BASE_URL + '​/api/SiteDispatch/SiteDispatchApproval', body)
    }
}

export const fromSiteDeclineAction = (singleSiteApproval, action) => {
    const { roleId, roleName } = getUserDetails();
    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        "roleHierarchy": 3
    }

    return {
        type: ACTION_FROM_SITE_DECLINE,
        payload: axios.post(config.BASE_URL + '/api/SiteDispatch/SiteDispatchRejection', body)
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