import { connect } from "react-redux";
import store from "../../store";
import {
  getSiteDispatchDetails,
  getStructureListCode,
  updateSiteDispatch,
} from "../../actions/siteDispatch";

import {
  SET_SHOW_EDIT_MODAL_FLAG,
  SET_ACTIVE_ITEM,
  SET_STRUCTURE_ID,
  SET_DISPATCH_DATE,
  SET_WORK_ORDER_NUMBER,
  SET_UPLOADED_FILE,
  RESET_UPDATE_SITE_DISPATCH_MODAL,
  SET_VENDOR_CODE_LIST,
  SET_TO_SITE,
  SET_QUANTITY_DISPATCHED,
  SET_STRUCTURE_NAME
} from "../../actions/types";
import NewFabricationVendor from "../../pages/newFabrication/Vendor";
import {getVendorDetails, getVendorList,updateNewFabricationVendor} from "../../actions/newFabricationVendorAction";


const mapDispatchToProps = (dispatch) => {
  return {
    getVendorDetails() {
      dispatch(getVendorDetails());
    },
    handleChangeVendor(value) {
      dispatch({
        type: SET_VENDOR_CODE_LIST,
        payload: value,
      });
    },
    handleChangeStructureName(value) {
      dispatch({
        type: SET_STRUCTURE_NAME,
        payload: value,
      });
    },
    handleChangeToSite(value) {
      dispatch({
        type: SET_TO_SITE,
        payload: value,
      });
    },
    handleChangeDispatchDate(value) {
      dispatch({
        type: SET_DISPATCH_DATE,
        payload: value,
      });
    },
    handleChangeQuantityDispatched(value) {
      dispatch({
        type: SET_QUANTITY_DISPATCHED,
        payload: value,
      });
    },
    handleChangeWorkOrderNumber(value) {
      dispatch({
        type: SET_WORK_ORDER_NUMBER,
        payload: value,
      });
    },
    handleChangeUploadedFile(value) {
      dispatch({
        type: SET_UPLOADED_FILE,
        payload: value,
      });
    },
    showUpdateDispatchModal(id) {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: true,
      });
      dispatch({
        type: SET_ACTIVE_ITEM,
        payload: id,
      });
      dispatch(getVendorList(id, "VENDOR"));
    },
    closeUpdateDispatchModal() {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_UPDATE_SITE_DISPATCH_MODAL });
    },
    updateSiteDispatch() {
      dispatch(updateNewFabricationVendor());
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_UPDATE_SITE_DISPATCH_MODAL });
    },
  };
};

const mapStateToProps = (state) => {
  const newFabricationVendor = store.getState().newFabricationVendor;
  return {
    newFabricationVendor,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFabricationVendor);
