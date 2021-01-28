import axios from "axios";
import store from "../store";
import config from "../config";
import {
  GET_SITE_REQ_DETAILS,
  GET_SITE_REQ_DETAILS_BY_ID,
  CREATE_DISPATCH,
  SET_ACTIVE_ITEM,
} from "../actions/types";

export const getSiteReqDetails = () => {
  // ! roleName is to be get from the userDetails
  return {
    type: GET_SITE_REQ_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetails?role_name=BU`
    ),
  };
};

export const getSiteReqDetailsById = (siteReqId) => {
  return {
    type: GET_SITE_REQ_DETAILS_BY_ID,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/GetReqmntStructureforDispatch/${siteReqId}`
    ),
  };
};

export const setActiveItem = (id) => {
  return {
    type: SET_ACTIVE_ITEM,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetailsById/${id}`
    ),
  };
};

export const createDispatch = () => {
  let createDispatch = store.getState().createDispatch;
  let dispStructureDtls = [];
  createDispatch.selectedItems.map((item) => {
    let tempObj =
      createDispatch.serviceTypeId === 4
        ? {
            serviceTypeId: createDispatch.serviceTypeId,
            projectId: item.projectId,
            structureId: item.structureId,
            structureName: item.structureName,
            fromProjectId: item.availProjectId,
            surPlusDeclId: item.surPlusDeclId,
          }
        : {
            serviceTypeId: createDispatch.serviceTypeId,
            projectId: item.projectId,
            structureId: item.structureId,
            structureName: item.structureName,
          };
    dispStructureDtls.push(tempObj);
  });
  // TODO : get rolename from userdetails
  const data = {
    roleName: "TWCC",
    requirementId: createDispatch.activeItem.id,
    toProjectId: createDispatch.activeItem.projectId,
    dispStructureDtls,
  };
  return {
    type: CREATE_DISPATCH,
    payload: axios.post(
      `${config.BASE_URL}/api/SiteDispatch/createDispatch`,
      data
    ),
  };
};
