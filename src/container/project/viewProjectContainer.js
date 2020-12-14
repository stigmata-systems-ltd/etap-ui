import { connect } from "react-redux";
import store from "../../store";
import { 
  projectList, 
  getSingleProj,
  getSegmentList,
  getICList,
  getBUList,
  createProj,
  updateProj,
 } from "../../actions/masterAction";

import {
  COMPONENT_TYPE,
  RESET_PROJECT_FORM,
  SHOW_ADD_COMPONENT_MSG,
  COMPONENT_TYPE_STATUS,
  SHOW_ADD_PROJ_MODAL,
  PROJECT_NAME,
  AREA,
  PROJECT_BUSINESS_UNIT,
  SITE_LOCATION,
  PROJECT_INDEPENDENT_COMPANY,
  SET_EDIT_MODE,
  ON_CHANGE_SEGMENT,
} from "../../actions/types";
import ViewProject from "../../pages/project/ViewProject";

const mapDispatchToProps = (dispatch) => {
  return {
    projectList() {
      dispatch(projectList());
    },

    handleChangeComponentType(value) {
      dispatch({
        type: COMPONENT_TYPE,
        payload: value,
      });
    },
    handleComponentTypeStatus(value) {
      dispatch({
        type: COMPONENT_TYPE_STATUS,
        payload: value,
      });
    },
    showAddProjModal() {
      dispatch({type: RESET_PROJECT_FORM});
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_COMPONENT_MSG,
        payload: false,
      });
      dispatch(getSegmentList());
      dispatch(getICList());
      dispatch(getBUList());
    },
    closeAddProjModal() {
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: false,
      });
    },
    //Add Project
    handleChangeProjectName(value) {
      dispatch({
        type: PROJECT_NAME,
        payload: value,
      });
    },
    handleChangeSegment(obj) {
      dispatch({
        type: ON_CHANGE_SEGMENT,
        payload: obj,
      });
    },
    handleChangeArea(value) {
      dispatch({
        type: AREA,
        payload: value,
      });
    },
    handleChangeBusinessUnit(obj) {
      dispatch({
        type: PROJECT_BUSINESS_UNIT,
        payload: obj,
      });
    },
    handleChangeSiteLocation(value) {
      dispatch({
        type: SITE_LOCATION,
        payload: value,
      });
    },
    handleChangeIndependentCompany(value) {
      dispatch({
        type: PROJECT_INDEPENDENT_COMPANY,
        payload: value,
      });
    },
    createProject() {
      dispatch(createProj())
    },
    //Edit Proj
    updateProject() {
      dispatch(updateProj())
    },
    handleEdit(id) {
      dispatch(getSingleProj(id));
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
      dispatch(getSegmentList());
      dispatch(getICList());
      dispatch(getBUList());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    proj: state.proj,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject);
