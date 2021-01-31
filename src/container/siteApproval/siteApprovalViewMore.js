import { connect } from "react-redux";
import store from "../../store";

import { RESET_UPDATE_SITE_APPROVAL_MODAL, SET_SHOW_MORE_MODAL_FLAG } from "../../actions/types";
import SiteApprovalViewMore from "../../pages/siteApproval/SiteApprovalViewMore";

const mapDispatchToProps = (dispatch) => {
  return {
    closeSiteApprovalViewMoreModal() {
      dispatch({
        type: SET_SHOW_MORE_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type:RESET_UPDATE_SITE_APPROVAL_MODAL });
    },
  };
};

const mapStateToProps = (state) => {
  const siteApproval = store.getState().siteApproval;
  return {
    siteApproval,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteApprovalViewMore);
