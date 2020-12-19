import store from "../store";
import axios from "axios";
import config from "../config";
import { 
    LIST_ICBU,
    GET_SINGLE_ICBU,
    CREATE_ICBU,
    UPDATE_ICBU,
    GET_BU_LIST,
    GET_IC_LIST

 } from "./types";

//Projects

export const icbuList = () => {
  return {
    type: LIST_ICBU,
    payload: axios.get(config.BASE_URL + "/api​/BU​/getBUlist"),
  };
};

export const getSingleIcbu = (id) => {
  return {
    type: GET_SINGLE_ICBU,
    payload: axios.get(
      config.BASE_URL + "/api/BU/getBUDetailsById/" + id
    ),
  };
};

export const getICList = () => {
  return {
    type: GET_IC_LIST,
    payload: axios.get(config.BASE_URL + "/api/IC/icCodeList"),
  };
};

export const getBUList = () => {
  return {
    type: GET_BU_LIST,
    payload: axios.get(config.BASE_URL + "/api/BU/buCodeList"),
  };
};

export const createIcbu = () => {
  const icbu = store.getState().icbu;
  const data = {
    icId: icbu.icId,
    lstBussUnit: [
      {
        name: "test - 01",
      },
    ],
  };
  return {
    type: CREATE_ICBU,
    payload: axios.post(config.BASE_URL + "/api/BU/createBU", data),
  };
};

export const updateIcbu = () => {
  const icbu = store.getState().icbu;
  const data = {
    icId: icbu.icId,
    lstBussUnit: [
      {
        name: "test - 01",
      },
    ],
  };
  return {
    type: UPDATE_ICBU,
    payload: axios.put(config.BASE_URL + "/api/BU/updateBU/" + icbu.icId, data),
  };
};
