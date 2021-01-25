import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,
    CHANGE_VIEW_SITE_APPROVAL_MORE_MODAL_STATUS,

} from "../../actions/types";

import { getOutSourcingSiteApprovalDetails, siteApprovalAction } from '../../actions/outSourcingSiteApprovalAction';
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
            let siteApprovalList = store.getState().outSourcingsiteApproval.siteApprovalList;
            let singleSiteApproval = siteApprovalList[id];
            dispatch(siteApprovalAction(id, "Approval"));
        },
        handleReject(id) {
            console.log(`ID: ${id}`)
            dispatch(siteApprovalAction(id, "Rejection"));
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
        closeSiteApprovalViewMoreModal() {
            dispatch({
                type: CHANGE_VIEW_SITE_APPROVAL_MORE_MODAL_STATUS,
                payload: false,
            })
        }



    };
};

const mapStateToProps = (state) => {
    const outSourcingsiteApproval = store.getState().outSourcingsiteApproval;
    return {
        outSourcingsiteApproval,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutSourcingSiteApproval);
