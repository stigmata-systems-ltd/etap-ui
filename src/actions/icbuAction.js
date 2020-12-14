import store from '../store';
import axios from 'axios';
import config from '../config';
import { ADD_INDEPENDENT_COMPANY } from "./types";



export const addIndependentCompany = () => {
    return {
        type: ADD_INDEPENDENT_COMPANY,
        payload: axios.post(config.BASE_URL + '/api/BU/createBU')
    }
}

