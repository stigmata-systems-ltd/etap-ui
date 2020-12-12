import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_PROJECT_CODES } from "./types";



export const projectCodesList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}
