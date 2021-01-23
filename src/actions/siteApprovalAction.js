import axios from "axios";
import store from "../store";
import config from "../config";
import { SET_SITE_APPROVAL_DETAILS,ACTION_SITE_APPROVAL } from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

// export const siteApprovalAction = (id, action) => {
//     const ROLE_NAME = getUserDetails().roleName;
//     let siteApprovalList = store.getState().siteApproval.siteApprovalList;
//     let singleSiteApproval = siteApprovalList[id];
//     const body = {
//         "siteReqId": singleSiteApproval.id,
//         "mode": action,
//         "role_name": ROLE_NAME,
//     }

//     return {
//         type: ACTION_SITE_APPROVAL,
//         payload: axios.post(config.BASE_URL + '/api/Surplus/WorkflowManagement', body)
//     }
// }
