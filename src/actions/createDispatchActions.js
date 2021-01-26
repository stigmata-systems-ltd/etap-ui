import axios from "axios";
import config from "../config";
import { GET_SITE_REQ_DETAILS } from "../actions/types";

export const getSiteReqDetails = () => {
  // ! roleName is to be get from the userDetails
  return {
    type: GET_SITE_REQ_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetails?role_name=TWCC`
    ),
  };
};
