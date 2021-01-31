import { connect } from "react-redux";
import store from "../../store";

import { RESET_UPDATE_SITE_APPROVAL_MODAL, SET_SHOW_MORE_MODAL_FLAG } from "../../actions/types";
import OutSourcingSiteApprovalViewMore from "../../pages/outsource/OutSourcingSiteApprovalViewMore";

const mapDispatchToProps = (dispatch) => {
    return {
        closeOutSourceSiteApprovalViewMoreModal() {
            dispatch({
                type: SET_SHOW_MORE_MODAL_FLAG,
                payload: false,
            });
            dispatch({ type:RESET_UPDATE_SITE_APPROVAL_MODAL });
        }
    };
};

const mapStateToProps = (state) => {
    const outSourcingsiteApproval = store.getState().outSourcingsiteApproval;
    return {
        outSourcingsiteApproval,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OutSourcingSiteApprovalViewMore);
