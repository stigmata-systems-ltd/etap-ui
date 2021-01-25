import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,


} from "../../actions/types";

import { getToSiteApprovalDetails, toSiteApprovalAction } from '../../actions/toSiteApprovalAction';
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
            let toSiteApprovalList = store.getState().toSiteApproval.toSiteApprovalList;
            let singleToSite = toSiteApprovalList[id];
            dispatch(toSiteApprovalAction(id, "Approval"));
        },
        handleReject(id) {
            
            dispatch(toSiteApprovalAction(id, "Rejection"));
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
