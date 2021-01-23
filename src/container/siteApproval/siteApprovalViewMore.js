import { connect } from 'react-redux';
import store from '../../store';

import {
    CHANGE_VIEW_SITE_APPROVAL_MORE_MODAL_STATUS
} from '../../actions/types';
import SiteApprovalViewMore from '../../pages/siteApproval/SiteApprovalViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeSiteApprovalViewMoreModal(){
      dispatch({
              type: CHANGE_VIEW_SITE_APPROVAL_MORE_MODAL_STATUS,
              payload: false,
            })
          }
  };
};

const mapStateToProps = state => {
  const siteApproval = store.getState().siteApproval;
  return {
    siteApproval,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteApprovalViewMore);
