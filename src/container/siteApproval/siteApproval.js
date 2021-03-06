import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,

} from "../../actions/types";

import { getSiteApprovalDetails, siteApprovalAction, siteDeclineAction } from '../../actions/siteApprovalAction';
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
            let siteApprovalList = store.getState().siteApproval.siteApprovalDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            console.log("Approval Data------> ", singleSiteApproval)

            dispatch(siteApprovalAction(singleSiteApproval, "Approval")).then(() => {
                dispatch(getSiteApprovalDetails());
            });
        },
        handleReject(id) {
            let siteApprovalList = store.getState().siteApproval.siteApprovalDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            dispatch(siteDeclineAction(singleSiteApproval, "Rejection")).then(() => {
                dispatch(getSiteApprovalDetails());
            });
        },

        showSiteApprovalMoreModal(id) {
            console.log(`ID: ${id}`)
            //dispatch(singleSiteApprovalFetch(id));

            dispatch({
                type: SET_SHOW_MORE_MODAL_FLAG,
                payload: true,
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
