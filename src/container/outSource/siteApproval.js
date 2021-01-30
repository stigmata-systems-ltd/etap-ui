import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,

} from "../../actions/types";

import { getOutSourcingSiteApprovalDetails, siteApprovalAction, siteDeclineAction } from '../../actions/outSourcingSiteApprovalAction';
import OutSourcingSiteApproval from "../../pages/outsource/OutSourcingSiteApproval";

const mapDispatchToProps = (dispatch) => {
    return {
        getOutSourcingSiteApprovalDetails() {
            dispatch(getOutSourcingSiteApprovalDetails());
        },


        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },


        handleApprove(id) {
            let siteApprovalList = store.getState().outSourcingsiteApproval.outSourcingSiteApprovalDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            console.log("Approval Data------> ", singleSiteApproval)

            dispatch(siteApprovalAction(singleSiteApproval, "Approval")).then(() => {
                dispatch(getOutSourcingSiteApprovalDetails());
            });
        },
        handleReject(id) {
            let siteApprovalList = store.getState().siteApproval.outSourcingSiteApprovalDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            dispatch(siteDeclineAction(singleSiteApproval, "Rejection")).then(() => {
                dispatch(getOutSourcingSiteApprovalDetails());
            });
        },

        showSiteApprovalMoreModal(id) {
            dispatch({
                type: SET_SHOW_MORE_MODAL_FLAG,
                payload: true,
            });
            dispatch({
                type: SET_ACTIVE_ITEM,
                payload: id,
            });

        },

    };
};

const mapStateToProps = (state) => {
    const outSourcingsiteApproval = store.getState().outSourcingsiteApproval;
    return {
        outSourcingsiteApproval,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutSourcingSiteApproval);
