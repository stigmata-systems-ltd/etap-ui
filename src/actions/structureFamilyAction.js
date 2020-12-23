import store from '../store';
import axios from 'axios';
import config from '../config';
import { ADD_STRUCTURE_FAMILY,UPDATE_STRUCTURE_FAMILY_TYPE,LIST_STRUCTURE_FAMILY,GET_STRUCTURE_FAMILY_TYPE } from "./types";

export const addStructureFamily = () => {
    const {structureFamilyType,structureFamilyTypeStatus} = store.getState().structureFamily;
        let status;
      if(structureFamilyTypeStatus === "Active"){
          status=true;
      } else{
          status=false;
      }
      const body={
          id : 0,
          name: structureFamilyType,
          isActive: status,
          description: structureFamilyType
      };
    return {
        type: ADD_STRUCTURE_FAMILY,
        payload: axios.post(config.BASE_URL + '/api/StructureFamily/createStructureFam', body)
    }
}
export const updateStructureFamilyType = (id) => {
    const {structureFamilyTypeID,structureFamilyType,structureFamilyTypeStatus} = store.getState().structureFamily;
    const status=(structureFamilyTypeStatus==="InActive")?false:true
      const body={
          id:structureFamilyTypeID,
          name: structureFamilyType,
          isActive: status
      };
    return {
        type: UPDATE_STRUCTURE_FAMILY_TYPE,
        payload: axios.put(config.BASE_URL + '​/api​/StructureFamily​/updateStructureFam/'+structureFamilyTypeID, body)
    }
}


export const structureFamilyList = () => {
    return {
        type: LIST_STRUCTURE_FAMILY,
        payload: axios.get(config.BASE_URL + '/api/StructureFamily/getStructureFamDetails')
    }
}

export const getSingleStructureFamilyType = (id) => {
    return {
        type: GET_STRUCTURE_FAMILY_TYPE,
        payload: axios.get(config.BASE_URL + '/api/StructureFamily/getStructureFamDetailsById/'+id)
    }
}
