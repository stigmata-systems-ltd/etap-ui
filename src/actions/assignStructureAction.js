import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_ASSIGN_STRUCTURE,GET_ASSIGN_STRUCTURE_DATA_SINGLE} from "./types";

// export const addStructure = () => {
//     const structure = store.getState().structure;
//     const stringifiedStructure = JSON.stringify(structure.attributeList);
//       const body={
//         "name": structure.structureName,
//         "structureTypeId": structure.structureFamily,
//         "isActive": true,
//         "structureAttributes": stringifiedStructure,
//       }
//     return {
//         type: ADD_STRUCTURE,
//         payload: axios.post(config.BASE_URL + '/api/Structure/addstructure', body)
//     }
// }


export const assignStructureList = () => {
    return {
        type: LIST_ASSIGN_STRUCTURE,
        payload: axios.get(config.BASE_URL + '/api/StructureComponent/GetAssignedStructureDetails')
    }
}
// export const addAttribute = () => {
//     const structure = store.getState().structure;
//     let attributeList = structure.attributeList;
//     const attributeObj = {
//       name: "",
//       typeOfInput: "",
//       uom: ""
//     };
//     attributeList.push(attributeObj);
//     return {
//       type: STRUCTURE_ATTRIBUTE_LIST,
//       payload: attributeList,
//     };
//   };

export const assignStructureFetch = (id) => {
  const assignStructure = store.getState().assignStructure;
  const data=assignStructure.assignStructureList[id];
    console.log(`Structure Data: ${JSON.stringify(data)}`)
    return {
      type: GET_ASSIGN_STRUCTURE_DATA_SINGLE,
      payload: data,
    };
};

// export const updateStructure = () => {
//   const structure = store.getState().structure;
//   let stringifiedStructure = JSON.stringify(structure.attributeList);
  
//     const body={
//       "name": structure.structureName,
//       "structureTypeId": structure.structureFamily,
//       "isActive": true,
//       "structureAttributes": stringifiedStructure,
//     }
//   return {
//       type: UPDATE_STRUCTURE,
//       payload: axios.put(config.BASE_URL + '/api/Structure/updatestructure/'+ structure.id, body)
//   }
// }


