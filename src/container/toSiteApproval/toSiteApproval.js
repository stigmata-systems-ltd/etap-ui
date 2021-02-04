import { connect } from "react-redux";
import store from "../../store";

import {
    SET_SHOW_TABLE_FLAG,
} from "../../actions/types";

import { getToSiteApprovalDetails, siteApprovalAction, siteDeclineAction } from '../../actions/toSiteApprovalAction';
import ToSiteApproval from "../../pages/toSite/ToSiteApproval";

const mapDispatchToProps = (dispatch) => {
    return {
        getToSiteApprovalDetails() {
            dispatch(getToSiteApprovalDetails());
        },
        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },
        handleApprove(id) {
            let toSiteApprovalList = store.getState().toSiteApproval.toSiteApprovalDetails;
            let singleSiteApproval = toSiteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            console.log("Approval Data------> ", singleSiteApproval)

            dispatch(siteApprovalAction(singleSiteApproval, "Approval")).then(() => {
                dispatch(getToSiteApprovalDetails());
            });
        },
        handleReject(id) {
            let toSiteApprovalList = store.getState().toSiteApproval.toSiteApprovalDetails;
            let singleSiteApproval = toSiteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            dispatch(siteDeclineAction(singleSiteApproval, "Rejection")).then(() => {
                dispatch(getToSiteApprovalDetails());
            });
        },

    };
};

const mapStateToProps = (state) => {
    const toSiteApproval = store.getState().toSiteApproval;
    return {
        toSiteApproval,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToSiteApproval);
