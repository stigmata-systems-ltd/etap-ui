import store from '../store';
import axios from 'axios';
import config from '../config';
import { 
    ADD_BUSINESS_UNIT,
    GET_BUSINESS_UNIT_TYPE,
    LIST_BUSINESS_UNIT,
    UPDATE_BUSINESS_UNIT_NAME,
    LIST_IC_CODES
} from "./types";

export const addBusinessUnit = () => {
    const {businessUnitType} = store.getState().businessUnit;
      const body={
        icId : 0,
        lstBussUnit: businessUnitType,
          
      };
    return {
        type: ADD_BUSINESS_UNIT,
        payload: axios.post(config.BASE_URL + '/api/BU/createBU', body)
    }
}
export const updateBusinessUnitType = (id) => {
    const {businessUnitID,businessUnitName,businessUnitStatus} = store.getState().businessUnit;
    const status=(businessUnitStatus==="InActive")?false:true
      const body={
        icId:businessUnitID,
        lstBussUnit: businessUnitName,
      };
    return {
        type: UPDATE_BUSINESS_UNIT_NAME,
        payload: axios.put(config.BASE_URL + '​/api/BU/updateBU/'+businessUnitID, body)
    }
}


export const businessUnitList = () => {
    return {
        type: LIST_BUSINESS_UNIT,
        payload: axios.get(config.BASE_URL + '/api/BU/getBUlist')
    }
}


export const getICCodes = () => {
    return {
        type: LIST_IC_CODES,
        payload: axios.get(config.BASE_URL + '/api/IC/icCodeList')
    }
}

export const getSingleBusinessUnitType = (id) => {
    return {
        type: GET_BUSINESS_UNIT_TYPE,
        payload: axios.get(config.BASE_URL + '/api/BU/getBUDetailsById/'+id)
    }
}
