import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,


} from "../../actions/types";

import { getFromSiteApprovalDetails, siteApprovalAction,siteDeclineAction } from '../../actions/fromSiteApprovalAction';
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
            let fromSiteApprovalList = store.getState().fromSiteApproval.fromSiteApprovalDetails;
            let singleSiteApproval = fromSiteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            console.log("Approval Data------> ", singleSiteApproval)

            dispatch(siteApprovalAction(singleSiteApproval, "Approval")).then(() => {
                dispatch(getFromSiteApprovalDetails());
            });
        },
        handleReject(id) {
            let siteApprovalList = store.getState().fromSiteApproval.fromSiteApprovalDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            dispatch(siteDeclineAction(singleSiteApproval, "Rejection")).then(() => {
                dispatch(getFromSiteApprovalDetails());
            });
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
