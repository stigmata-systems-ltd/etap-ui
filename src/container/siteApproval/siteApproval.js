import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,

} from "../../actions/types";

import { getSiteApprovalDetails, siteApprovalAction } from '../../actions/siteApprovalAction';
import NewFabricationSiteApproval from "../../pages/siteApproval/SiteApproval";

const mapDispatchToProps = (dispatch) => {
    return {
        getSiteApprovalDetails() {
            dispatch(getSiteApprovalDetails());
        },


        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },

        handleApprove(id) {
            let siteApprovalList = store.getState().siteApproval.siteApprovalList;
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



    };
};

const mapStateToProps = (state) => {
    const siteApproval = store.getState().siteApproval;
    return {
        siteApproval,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFabricationSiteApproval);
