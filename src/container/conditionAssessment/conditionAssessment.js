import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,


} from "../../actions/types";

import { getConditionAssessmentDetails, siteApprovalAction, siteDeclineAction } from '../../actions/conditionAssessmentAction';
import ConditionAssessment from "../../pages/conditionAssessment/ConditionAssessment";

const mapDispatchToProps = (dispatch) => {
    return {
        getConditionAssessmentDetails() {
            dispatch(getConditionAssessmentDetails());
        },


        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },

        // handleApprove(id) {
        //     let conditionAssessmentList = store.getState().conditionAssessment.conditionAssessmentList;
        //     let singleConditionAssessment = conditionAssessmentList[id];
        //     dispatch(siteApprovalAction(id, "Approval"));
        // },
        // handleReject(id) {
        //     console.log(`ID: ${id}`)
        //     dispatch(siteDeclineAction(id, "Rejection"));
        // },


        handleApprove(id) {
            let siteApprovalList = store.getState().conditionAssessment.conditionAssessmentDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            console.log("Approval Data------> ", singleSiteApproval)

            dispatch(siteApprovalAction(singleSiteApproval, "Approval")).then(() => {
                dispatch(getConditionAssessmentDetails());
            });
        },
        handleReject(id) {
            let siteApprovalList = store.getState().conditionAssessment.conditionAssessmentDetails;
            let singleSiteApproval = siteApprovalList.filter((listItem) => {
                return listItem.siteRequestId === id;
            })[0];
            dispatch(siteDeclineAction(singleSiteApproval, "Rejection")).then(() => {
                dispatch(getConditionAssessmentDetails());
            });
        },


    };
};

const mapStateToProps = (state) => {
    const conditionAssessment = store.getState().conditionAssessment;
    return {
        conditionAssessment,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConditionAssessment);
