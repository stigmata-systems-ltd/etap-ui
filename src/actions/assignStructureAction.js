import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_ASSIGN_STRUCTURE,GET_ASSIGN_STRUCTURE_DATA_SINGLE,LIST_ASSIGN_COMPONENT,GET_ASSIGN_COMPONENT_DATA_SINGLE} from "./types";

export const assignStructureList = () => {
    return {
        type: LIST_ASSIGN_STRUCTURE,
        payload: axios.get(config.BASE_URL + '/api/StructureComponent/GetAssignedStructureDetails')
    }
}

export const assignComponentList = () => {
  const assignStructure = store.getState().assignStructure;
  console.log(`/api/StructureComponent/GetAssignedStructureDetailsById?structId=${assignStructure.structureID}&projectId=${assignStructure.projectID}`)
  return {
      type: LIST_ASSIGN_COMPONENT,
      payload: axios.get(config.BASE_URL + `/api/StructureComponent/GetAssignedStructureDetailsById?structId=${assignStructure.structureID}&projectId=${assignStructure.projectID}`)
  }
}

export const assignStructureFetch = (id) => {
  const assignStructure = store.getState().assignStructure;
  const data=assignStructure.assignStructureList[id];
    console.log(`Structure Data: ${JSON.stringify(data)}`)
    return {
      type: GET_ASSIGN_STRUCTURE_DATA_SINGLE,
      payload: data,
    };
};

export const assignComponentFetch = (id) => {
  const assignStructure = store.getState().assignStructure;
  const data=assignStructure.assignComponentList.components[id];
    console.log(`Structure Data: ${JSON.stringify(data)}`)
    return {
      type: GET_ASSIGN_COMPONENT_DATA_SINGLE,
      payload: data,
    };
};



