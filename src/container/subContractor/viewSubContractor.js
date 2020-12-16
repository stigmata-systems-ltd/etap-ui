import { connect } from "react-redux";
import store from "../../store";
import { 
  vendorList, 
  getSingleVendor,
  createVendor,
  updateVendor,
  
 } from "../../actions/vendorAction";

import {
  RESET_PROJECT_FORM,
  RESET_VENDOR_FORM,
  SET_EDIT_MODE,
  SHOW_ADD_VENDOR_MODAL,
  SHOW_ERR_MSG,
  SHOW_ADD_VENDOR_MSG
} from "../../actions/types";
import ViewSubContractor from "../../pages/subcontractor/ViewSubContractor";

const mapDispatchToProps = (dispatch) => {
  return {
    vendorList() {
      dispatch(vendorList());
    },

   
    showAddVendorModal() {
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_VENDOR_MSG,
        payload: false,
      });
      
    },
    closeAddVendorModal() {
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: false,
      });
      dispatch({type: RESET_VENDOR_FORM});
    },
    //Add Project
  
    createVendor() {
      dispatch(createVendor()).then(() => {
        dispatch({
          type: SHOW_ADD_VENDOR_MODAL,
          payload: false,
        });
        dispatch({type: RESET_PROJECT_FORM});
        dispatch(vendorList());
      })
    },
    //Edit Proj
    updateVendor() {
      dispatch(updateVendor()).then(() => {
        dispatch({
          type: SHOW_ADD_VENDOR_MODAL,
          payload: false,
        });
        dispatch({type: RESET_PROJECT_FORM});
        dispatch(vendorList());
      }).catch(() => {
        dispatch({type: SHOW_ERR_MSG, payload: true});
      })
    },
    handleEdit(id) {
      dispatch(getSingleVendor(id));
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
     
    },
  };
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubContractor);
