import store from '../store';
import axios from 'axios';
import config from '../config';
import { GET_SURPLUS_DATA_SINGLE,ACTION_SURPLUS,SURPLUS_APPROVAL_LIST,ADD_SURPLUS,LIST_PROJECT_CODES, LIST_WBS_CODES,SITE_REQUIRMENT_LIST,ADD_REQUIREMENT,SURPLUS_LIST_STRUCTURE_PROJECT_DATA } from "./types";
import { getUserDetails } from "../utils/auth";

export const getProjectList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}

export const getWBSList = () => {
    return {
        type: LIST_WBS_CODES,
        payload: axios.get(config.BASE_URL + '/api/WBS/GetWBSCode')
    }
}

export const addSurplus= () => {
    const surplus = store.getState().surplus;
    const postData = new FormData();
    postData.append("dispStructId", parseInt(surplus.structureID.value));
    postData.append("surplusDate", surplus.dateFrom+"T00:00:00.000Z");
    postData.append("uploadDocs",surplus.surplusFile)
    const configHeader = {
        headers: { "content-type": "multipart/form-data" },
      };

    return {
        type: ADD_SURPLUS,
        payload: axios.post(config.BASE_URL + '/api/Surplus/addsurplus', postData,
      configHeader)
    }
}

export const getProjectStructureData = () => {
    return {
        type: SURPLUS_LIST_STRUCTURE_PROJECT_DATA,
        payload: axios.get(config.BASE_URL + '/api/StructureComponent/GetAssignedStructureDetails')
    }
}

export const getSurplus = () => {
    const ROLE_NAME= getUserDetails().roleName;
    return {
        type: SURPLUS_APPROVAL_LIST,
        payload: axios.get(config.BASE_URL + '/api/surplus/getsurplus?role_name='+ROLE_NAME)
    }
}

export const surplusAction = (id,action) => {
    const ROLE_NAME= getUserDetails().roleName;
    let surplusList = store.getState().surplus.surplusList;
    let singleSurplus=surplusList[id];
      const body={
            "siteReqId": singleSurplus.id,
            "mode": action,
            "role_name": ROLE_NAME,
          }
      
    return {
        type: ACTION_SURPLUS,
        payload: axios.post(config.BASE_URL + '/api/Surplus/WorkflowManagement', body)
    }
}


export const singleSurplusFetch = (id) => {
    const surplus = store.getState().surplus;
    const data=surplus.surplusList[id];
      return {
        type: GET_SURPLUS_DATA_SINGLE,
        payload: data,
      };
}
