import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_STRUCTURE,STRUCTURE_ATTRIBUTE_LIST,ADD_STRUCTURE} from "./types";

export const addStructure = () => {
    const structure = store.getState().structure;
    const stringifiedStructure = JSON.stringify(structure.attributeList);
      const body={
        "name": structure.structureName,
        "structureTypeId": structure.structureFamily,
        "isActive": true,
        "structureAttributes": stringifiedStructure,
      }
    return {
        type: ADD_STRUCTURE,
        payload: axios.post(config.BASE_URL + '/api/Structure/addstructure', body)
    }
}


export const structureList = () => {
    return {
        type: LIST_STRUCTURE,
        payload: axios.get(config.BASE_URL + '/api/Structure/getstructure')
    }
}
export const addAttribute = () => {
    const structure = store.getState().structure;
    let attributeList = structure.attributeList;
    const attributeObj = {
      name: "",
      typeOfInput: "",
      uom: ""
    };
    attributeList.push(attributeObj);
    return {
      type: STRUCTURE_ATTRIBUTE_LIST,
      payload: attributeList,
    };
  };

// export const projectCodesList = () => {
//     return {
//         type: LIST_PROJECT_CODES,
//         payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
//     }
// }

// export const getProjectDetails = () => {
//     const {project} = store.getState().users;
//     return {
//         type: GET_PROJECT_DETAILS,
//         payload: axios.get(config.BASE_URL + '/api/Project/getProjDetailsById/'+project.value)
//     }
// }

// export const getRolesList = () => {
//     const {project} = store.getState().users;
//     return {
//         type: GET_ROLES_LIST,
//         payload: axios.get(config.BASE_URL + '/api/PageAccess/getroles')
//     }
// }

// export const userFetch = (id) => {
    
//     return {
//         type: GET_USER_SINGLE,
//         payload: axios.get(config.BASE_URL + '/api/User/getuser/'+id)
//     }
// }

//     export const updateUser = () => {
//         const users = store.getState().users;
//           const body={
//             "firstName": users.firstName,
//             "lastName": users.lastName,
//             "userName": users.psNo,
//             "email": users.email,
//             "mobileNo": "00000",
//             "projectId": users.project.value,
//             "icId": users.icId,
//             "buId": users.buId,
//             "segmentId": users.segmentId,
//             "userId": users.userId,
//             "roleId": users.role.value,
//           }
//         return {
//             type: UPDATE_USER,
//             payload: axios.put(config.BASE_URL + '/api/User/updateuser/'+users.userId, body)
//         }
//     }





