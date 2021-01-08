import { connect } from 'react-redux';
import store from '../../store';
import {getSurplus,surplusAction} from '../../actions/surplusAction';
import { withRouter } from "react-router-dom";

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  SET_PROJECT_STRUCTURE_ID,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
  VIEW_REQUIREMENTS_MORE_PAGE,
  CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS
} from '../../actions/types';
import ViewSurplusAction from '../../pages/surplus/ViewSurplusAction';

 
const mapDispatchToProps = (dispatch,props) => {
  return {
    getSurplus() {
      dispatch(getSurplus());
    },
    handleApprove(id){
      let surplusList = store.getState().surplus.surplusList;
      let singleSurplus=surplusList[id];
      console.log(singleSurplus)
      console.log(`ID: ${id}`)
      dispatch(surplusAction(id,"Approval"));
    },
    handleReject(id){
      console.log(`ID: ${id}`)
      dispatch(surplusAction(id,"Rejection"));
    },
    handleMore(id){
      console.log(`ID: ${id}`)
      // dispatch(singleRequirementFetch(id));
      dispatch({
        type: VIEW_REQUIREMENTS_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
        payload: true,
      })
    },
  };
};

const mapStateToProps = state => {
  const surplus = store.getState().surplus;
  return {
    surplus,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewSurplusAction));
