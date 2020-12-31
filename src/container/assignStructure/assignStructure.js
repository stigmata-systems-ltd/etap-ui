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
} from "../../actions/types";

import AssignStructure from "../../pages/assignStructure/AssignStructure";

import {
  getProjList,
  getStructList,
  getAssignStructDetails,
  saveAssignStruct,
  saveAssignComp,
} from "../../actions/StructCompAction";

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialData() {
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
        if (i > 0) {
          let wbsSampleObject = {
            ic: a.data[0] ? a.data[0] : "",
            bu: a.data[1] ? a.data[1] : "",
            project: a.data[2] ? a.data[2] : "",
            structFamily: a.data[3] ? a.data[3] : "",
            structure: a.data[4] ? a.data[4] : "",
            compType: a.data[5] ? a.data[5] : "",
            component: a.data[6] ? a.data[6] : "",
            group: a.data[7] ? a.data[7] : "",
            compNum: a.data[8] ? a.data[8] : "",
            drawingNum: a.data[9] ? a.data[9] : "",
            length: a.data[10] ? a.data[10] : "",
            breadth: a.data[11] ? a.data[11] : "",
            height: a.data[12] ? a.data[12] : "",
            thickness: a.data[13] ? a.data[13] : "",
            weight: a.data[14] ? a.data[14] : "",
            type: a.data[15] ? a.data[15] : "",
            tag: a.data[16] ? a.data[16] : "",
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
      })
    },
    handleFileUpload(value) {
      const scr = store.getState().scr;
      const newDocs = [...value];
      newDocs.map(doc => {
        doc.isNew = true;
      })
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
      removeFiles.push(file.id);
      dispatch({
        type: ASSIGN_FILE_REMOVE,
        payload: removeFiles,
      });
    },
    handleChangeAssignStruct(e, id) {
        const as = store.getState().scr;
        let tmpArr = JSON.parse(JSON.stringify(as.structAttri));
        tmpArr.map(arr => {
            if(arr.id === id) {
              arr.value = e.target.value
              console.log("test in if arr, eval",arr, e.target.value);
            }
            console.log("test",arr)
        })
        dispatch({
            type: ON_CHANGE_ASSIGN_STRUCT,
            payload: tmpArr
        })
    },
    clearStrcutAttri() {
      dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
    },
    saveAssignComp() {
      dispatch(saveAssignComp());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    scr: state.scr,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructure);
