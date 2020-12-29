import store from "../store";
import axios from "axios";
import config from "../config";
import {
  LIST_VENDOR,
  GET_SINGLE_VENDOR,
  UPDATE_VENDOR,
  CREATE_VENDOR,
} from "./types";

//Add Vendor


export const createVendor = () => {
  const vendor = store.getState().vendor;
  const data = {
    id: vendor.id,
    vendorCode: "test-code",
    name: vendor.name,
    email: vendor.email,
    phoneNunmber: vendor.phoneNunmber,
    vendorStatus: vendor.isStatus,
    vendorServiceTypeDetails: [
      {
        
        vendorId: 1,
        serviceTypeId: 1,
      },
    ],
  };
  return {
    type: CREATE_VENDOR,
    payload: axios.post(config.BASE_URL + "/api/Vendor/createVendor", data),
  };
};

export const updateVendor = () => {
  const vendor = store.getState().vendor;
  const data = {
    id: vendor.id,
    vendorCode: "test-code",
    name: vendor.name,
    email: vendor.email,
    phoneNunmber: vendor.phoneNunmber,
    vendorStatus: vendor.isStatus,

  };
  return {
    type: UPDATE_VENDOR,
    payload: axios.put(config.BASE_URL + "/api/Vendor/updateVendor/" + vendor.id, data),
  };
};

export const vendorList = () => {
  return {
    type: LIST_VENDOR,
    payload: axios.get(config.BASE_URL + "/api/Vendor/getVendorDetails"),
  };
};

export const getSingleVendor = (id) => {
  return {
    type: GET_SINGLE_VENDOR,
    payload: axios.get(
      config.BASE_URL + "/api/Vendor/getVendorDetailsById/" + id
    ),
  };
};
