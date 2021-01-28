import { connect } from "react-redux";
import store from "../../store";

import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_TYPE,
  ESTIMATED_WEIGHT,
  NUMBER_OF_COMPONENTS,
  RESET_ASSIGN_STRUCT_FORM,
  DRAWING_NO,
  ASSIGN_STRUCT_UPLOADED_DATA,
  ASSIGN_FILE_UPLOAD,
  ON_CHANGE_ASSIGN_STRUCT,
  ASSIGN_FILE_REMOVE,
  ASSIGN_STRUCT_EXCEL_UPLOAD,
  RESET_ASSIGN_COMP_FORM,
} from "../../actions/types";

import AssignStructure from "../../pages/assignStructure/AssignStructure";

import {
  getProjList,
  getStructList,
  getAssignStructDetails,
  saveAssignStruct,
  saveAssignComp,
  resetExistingData,
} from "../../actions/StructCompAction";

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialData() {
      dispatch({
        type: RESET_ASSIGN_STRUCT_FORM,
      });
      dispatch({
        type: RESET_ASSIGN_COMP_FORM,
      });

      dispatch(getProjList());
      dispatch(getStructList());
    },
    resetStructureData() {
      dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
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
        console.log("index", i, a);
        if (i > 0 && a.data.length > 1) {
          let start = 6;
          let wbsSampleObject = {
            compTypeName: a.data[start] ? a.data[start] : "",
            componentName: a.data[start + 1] ? a.data[start + 1] : "",
            compId: a.data[start + 2] ? a.data[start + 2] : "",
            isGroup: a.data[start + 3] ? Boolean(a.data[start + 3]) : "",
            componentNo: a.data[start + 4] ? parseInt(a.data[start + 4]) : "",
            drawingNo: a.data[start + 5] ? a.data[start + 5] : "",
            leng: a.data[start + 6] ? parseFloat(a.data[start + 6]) : "",
            breath: a.data[start + 7] ? parseFloat(a.data[start + 7]) : "",
            height: a.data[start + 8] ? parseFloat(a.data[start + 8]) : "",
            thickness: a.data[start + 9] ? parseFloat(a.data[start + 9]) : "",
            width: a.data[start + 10] ? parseFloat(a.data[start + 10]) : "",
            makeType: a.data[start + 11] ? a.data[start + 11] : "",
            isTag: a.data[start + 12] ? Boolean(a.data[start + 12]) : "",
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
      dispatch(saveAssignStruct()).then(() => {
        dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
      });
    },
    handleFileUpload(value) {
      const scr = store.getState().scr;
      const newDocs = [...value];
      newDocs.map((doc) => {
        doc.isNew = true;
      });
      const tmpArr = [...scr.files, ...newDocs];
      dispatch({
        type: ASSIGN_FILE_UPLOAD,
        payload: tmpArr,
      });
    },
    removeFiles(file, index) {
      const scr = store.getState().scr;
      const tmpArr = [...scr.files];
      tmpArr.splice(index, 1);
      dispatch({
        type: ASSIGN_FILE_UPLOAD,
        payload: tmpArr,
      });
      let removeFiles = [...scr.removeFiles];
      !file.isNew && removeFiles.push(file.id);
      dispatch({
        type: ASSIGN_FILE_REMOVE,
        payload: removeFiles,
      });
    },
    handleChangeAssignStruct(e, id) {
      const as = store.getState().scr;
      let tmpArr = JSON.parse(JSON.stringify(as.structAttri));
      tmpArr.map((arr) => {
        if (arr.id === id) {
          arr.value = e.target.value;
          // console.log("test in if arr, eval",arr, e.target.value);
        }
        // console.log("test",arr)
      });
      dispatch({
        type: ON_CHANGE_ASSIGN_STRUCT,
        payload: tmpArr,
      });
    },
    clearStrcutAttri() {
      dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
    },
    saveAssignComp() {
      dispatch(saveAssignComp()).then(() => {
        dispatch({ type: RESET_ASSIGN_COMP_FORM });
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
