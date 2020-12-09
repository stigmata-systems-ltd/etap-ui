import store from '../store';
import axios from 'axios';
import config from '../config';
import { COMPONENT_TYPE, ADD_COMPONENT, LIST_COMPONENT} from "./types";

export const addComponent = () => {
    const {componentType} = store.getState().component;
      const body={
          id : 0,
          name: componentType,
          isActive: true
      };
    return {
        type: ADD_COMPONENT,
        payload: axios.post(config.BASE_URL + '/api/ComponentType/addcomponenttype', body)
    }
}

export const componentList = () => {
    return {
        type: LIST_COMPONENT,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype')
    }
}