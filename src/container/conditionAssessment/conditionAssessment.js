import { connect } from "react-redux";
import store from "../../store";

import {

    SET_SHOW_TABLE_FLAG,


} from "../../actions/types";

import { getConditionAssessmentDetails, conditionAssessmentAction } from '../../actions/conditionAssessmentAction';
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

        handleApprove(id) {
            let conditionAssessmentList = store.getState().conditionAssessment.conditionAssessmentList;
            let singleConditionAssessment = conditionAssessmentList[id];
            dispatch(conditionAssessmentAction(id, "Approval"));
        },
        handleReject(id) {
            console.log(`ID: ${id}`)
            dispatch(conditionAssessmentAction(id, "Rejection"));
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
