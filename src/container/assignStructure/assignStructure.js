import { connect } from "react-redux";
import store from "../../store";

import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_TYPE,
  ESTIMATED_WEIGHT,
  NUMBER_OF_COMPONENTS,
  RESET_STRUCTURE_FORM,
  DRAWING_NO,
  ASSIGN_STRUCT_UPLOADED_DATA,
  ASSIGN_FILE_UPLOAD,
} from "../../actions/types";

import AssignStructure from "../../pages/assignStructure/AssignStructure";

import {
  getProjList,
  getStructList,
  getAssignStructDetails,
  saveAssignStruct,
} from "../../actions/StructCompAction";

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialData() {
      dispatch(getProjList());
      dispatch(getStructList());
    },
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    handleChangeComponentProjectName(obj) {
      dispatch({
        type: PROJECT_NAME,
        payload: obj,
      });
    },
    handleChangeComponentStructureName(value) {
      dispatch({
        type: STRUCTURE_NAME,
        payload: value,
      });
      dispatch(getAssignStructDetails());
    },
    handleChangeComponentStructureFamily(value) {
      dispatch({
        type: STRUCTURE_TYPE,
        payload: value,
      });
    },
    handleChangeComponentDrawingNumber(value) {
      dispatch({
        type: DRAWING_NO,
        payload: value,
      });
    },
    handleChangeEstimatedWeight(value) {
      dispatch({
        type: ESTIMATED_WEIGHT,
        payload: value,
      });
    },
    handleChangeNoOfComponents(value) {
      dispatch({
        type: NUMBER_OF_COMPONENTS,
        payload: value,
      });
    },
    handleOnDrop(data) {
      let wbsDataArr = [];
      data.forEach((a, i) => {
        if (i > 0) {
          let wbsSampleObject = {
            workBreakDownCode: a.data[0],
            segment: a.data[1],
            subSegment: a.data[2],
            element: a.data[3],
          };
          wbsDataArr.push(wbsSampleObject);
        }
      });
      dispatch({
        type: ASSIGN_STRUCT_UPLOADED_DATA,
        payload: wbsDataArr,
      });
    },
    saveAssignStruct() {
      dispatch(saveAssignStruct());
    },
    handleFileUpload(value) {
      dispatch({
        type: ASSIGN_FILE_UPLOAD,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    scr: state.scr,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructure);
