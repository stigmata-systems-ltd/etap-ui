import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_USERS,LIST_PROJECT_CODES,GET_PROJECT_DETAILS,GET_ROLES_LIST } from "./types";

// export const addComponent = () => {
//     const {componentType} = store.getState().component;
//       const body={
//           id : 0,
//           name: componentType,
//           isActive: true
//       };
//     return {
//         type: ADD_COMPONENT,
//         payload: axios.post(config.BASE_URL + '/api/ComponentType/addcomponenttype', body)
//     }
// }
// export const updateComponentType = (id) => {
//     const {componentTypeID,componentType,componentTypeStatus} = store.getState().component;
//     const status=(componentTypeStatus==="InActive")?false:true
//       const body={
//           id:componentTypeID,
//           name: componentType,
//           isActive: status
//       };
//     return {
//         type: UPDATE_COMPONENT_TYPE,
//         payload: axios.put(config.BASE_URL + '/api/ComponentType/updatecomponenttype/'+componentTypeID, body)
//     }
// }


export const usersList = () => {
    return {
        type: LIST_USERS,
        payload: axios.get(config.BASE_URL + '/api/User/getuser')
    }
}

export const projectCodesList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}

export const getProjectDetails = () => {
    const {project} = store.getState().users;
    return {
        type: GET_PROJECT_DETAILS,
        payload: axios.get(config.BASE_URL + '/api/Project/getProjDetailsById/'+project)
    }
}

export const getRolesList = () => {
    const {project} = store.getState().users;
    return {
        type: GET_ROLES_LIST,
        payload: axios.get(config.BASE_URL + '/api/PageAccess/getroles')
    }
}

