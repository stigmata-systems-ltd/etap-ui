import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_PROJECT_CODES, LIST_WBS_CODES,SITE_REQUIRMENT_LIST,ADD_REQUIREMENT } from "./types";


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
        structureId: "",
        drawingNumber: "",
        quantity: ""
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
        "planStartdate":requirement.planedStartDate,
        "planReleasedate":requirement.plannedReleaseDate,
        "actualStartdate":requirement.actualStartDateOfUsage,
        "actualReleasedate":requirement.plannedReleaseDate,
        "requireWbsId":requirement.requiredWorkBreak.value,
        "actualWbsId":requirement.actualWorkBreak.value,
        "remarks":requirement.remarks,
        "status": "true",
        "siteRequirementStructures":requirement.siteRequirementList,
      }
    return {
        type: ADD_REQUIREMENT,
        payload: axios.post(config.BASE_URL + '/api/SiteRequirement/createSiteReq', body)
    }
}