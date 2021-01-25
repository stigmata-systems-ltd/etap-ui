import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,


} from "../../actions/types";

import { getFromSiteApprovalDetails, fromSiteApprovalAction } from '../../actions/fromSiteApprovalAction';
import FromSiteApproval from "../../pages/fromSite/FromSiteApproval";

const mapDispatchToProps = (dispatch) => {
    return {
        getFromSiteApprovalDetails() {
            dispatch(getFromSiteApprovalDetails());
        },


        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },

        handleApprove(id) {
            let fromSiteApprovalList = store.getState().fromSiteApproval.fromSiteApprovalList;
            let singleConditionAssessment = fromSiteApprovalList[id];
            dispatch(fromSiteApprovalAction(id, "Approval"));
        },
        handleReject(id) {
            console.log(`ID: ${id}`)
            dispatch(fromSiteApprovalAction(id, "Rejection"));
        },


    };
};

const mapStateToProps = (state) => {
    const fromSiteApproval = store.getState().fromSiteApproval;
    return {
        fromSiteApproval,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FromSiteApproval);
