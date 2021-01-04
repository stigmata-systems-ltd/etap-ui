import { connect } from 'react-redux';
import store from '../../store';
import {getRequirementsList,requirementAction} from '../../actions/requirementAction';
import { withRouter } from "react-router-dom";

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  SET_PROJECT_STRUCTURE_ID,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS
} from '../../actions/types';
import ViewRequirementAction from '../../pages/requirements/ViewRequirementAction';

const mapDispatchToProps = (dispatch,props) => {
  return {
    getRequirementsList() {
      dispatch(getRequirementsList());
    },
    handleApprove(id){
      let requirementList = store.getState().requirement.requirementsList;
      let singleRequirement=requirementList[id];
      console.log(singleRequirement)
      console.log(`ID: ${id}`)
      dispatch(requirementAction(id,"Approval"));
    },
    handleReject(id){
      console.log(`ID: ${id}`)
      dispatch(requirementAction(id,"Rejection"));
    },
    handleMore(id){
      console.log(`ID: ${id}`)
    },
  };
};

const mapStateToProps = state => {
  const requirement = store.getState().requirement;
  return {
    requirement,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewRequirementAction));
