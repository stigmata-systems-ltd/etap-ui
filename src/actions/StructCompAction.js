import store from "../store";
import axios from "axios";
import config from "../config";
import { GET_PROJECT_LIST, GET_STRUCT_LIST, SAVE_ASSIGN_STRUCT } from "./types";

export const getProjList = () => {
  return {
    type: GET_PROJECT_LIST,
    payload: axios.get(config.BASE_URL + "/api/Project/projCodeList"),
  };
};

export const getStructList = () => {
  const scr = store.getState().scr;
  return {
    type: GET_STRUCT_LIST,
    payload: axios.get(config.BASE_URL + "/api/Structure/structureCodeList"),
  };
};

export const getAssignStructDetails = () => {
  const scr = store.getState().scr;
  const projId = scr.projName.value;
  const structId = scr.structName.value;
  return {
    type: GET_STRUCT_LIST,
    payload: axios.get(
      config.BASE_URL +
        "/api/StructureComponent/GetAssignedStructureDetailsById?structId=" +
        structId +
        "&projectId=" +
        projId
    ),
  };
};

export const saveAssignStruct = () => {
  const scr = store.getState().scr;
  const postData = new FormData();
  postData.append("structureId", scr.structName.value);
  postData.append("projectId", scr.projName.value);
  postData.append("drawingNo", "123");
  postData.append("structureAttributes", "123");
  postData.append("uploadDocs", scr.files);
  postData.append("remove_docs_filename", scr.structName.value);


  const configHeader = {
    headers: { "content-type": "multipart/form-data" },
  };
  return {
    type: SAVE_ASSIGN_STRUCT,
    payload: axios.post(
      config.BASE_URL + "/api/StructureComponent/assignStructureComponent",
      postData,
      configHeader
    ),
  };
};
