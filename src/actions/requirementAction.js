import store from '../store';
import axios from 'axios';
import config from '../config';
import { GET_REQUIREMENT_DATA_SINGLE,ACTION_REQUIREMENT,LIST_REQUIREMENTS,LIST_PROJECT_CODES, LIST_WBS_CODES,SITE_REQUIRMENT_LIST,ADD_REQUIREMENT,LIST_STRUCTURE_PROJECT_DATA } from "./types";


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

export const addSiteRequirement= () => {
    const requirement = store.getState().requirement;
    let siteRequirementList = requirement.siteRequirementList;
    const asiteRequirementObj = {
        structId: "",
        drawingNo: "",
        quantity: "",
        structName:"",
        structFamily:""
    };
    siteRequirementList.push(asiteRequirementObj);
    return {
      type: SITE_REQUIRMENT_LIST,
      payload: siteRequirementList,
    };
} 

export const addRequirement = () => {
    const requirement = store.getState().requirement;
      const body={
        "projectId": requirement.projectName.value,
        "planStartdate":requirement.planedStartDate+"T00:00:00.000Z",
        "planReleasedate":requirement.plannedReleaseDate+"T00:00:00.000Z",
        "actualStartdate":requirement.actualStartDateOfUsage+"T00:00:00.000Z",
        "actualReleasedate":requirement.expectedReleaseDate+"T00:00:00.000Z",
        "requireWbsId":requirement.requiredWorkBreak.value,
        "actualWbsId":requirement.actualWorkBreak.value,
        "remarks":requirement.remarks,
        "status": "NEW",
        "statusInternal": "NEW",
        "siteRequirementStructures":requirement.siteRequirementList,
      }
    return {
        type: ADD_REQUIREMENT,
        payload: axios.post(config.BASE_URL + '/api/SiteRequirement/createSiteReq', body)
    }
}

export const getProjectStructureData = () => {
    return {
        type: LIST_STRUCTURE_PROJECT_DATA,
        payload: axios.get(config.BASE_URL + '/api/StructureComponent/GetAssignedStructureDetails')
    }
}

export const getRequirementsList = () => {
    const ROLE_NAME="SITE";
    return {
        type: LIST_REQUIREMENTS,
        payload: axios.get(config.BASE_URL + `/api/SiteRequirement/getSiteReqDetails?role_name=${ROLE_NAME}`)
    }
}

export const requirementAction = (id,action) => {
    let requirementList = store.getState().requirement.requirementsList;
    let singleRequirement=requirementList[id];
      const body={
            "siteReqId": singleRequirement.id,
            "mode": action,
            "role_name": "ADMIN",
          }
      
    return {
        type: ACTION_REQUIREMENT,
        payload: axios.post(config.BASE_URL + '/api/SiteRequirement/WorkflowManagement', body)
    }
}

export const singleRequirementFetch = (id) => {
    const requirement = store.getState().requirement;
    const data=requirement.requirementsList[id];
      console.log(`Single Requirement Data: ${JSON.stringify(data)}`)
      return {
        type: GET_REQUIREMENT_DATA_SINGLE,
        payload: data,
      };
}
