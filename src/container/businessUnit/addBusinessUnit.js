import { connect } from 'react-redux';
import store from '../../store';

import {

  CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
  RESET_CREATE_BUSINESS_UNIT_FORM,
  RESET_STRUCTURE_FORM, SET_BUSINESS_UNIT_EDIT_MODE,
  BUSINESS_UNIT_NAME,
  BUSINESS_UNIT_STATUS

}
  from '../../actions/types';
import { addBusinessUnit, updateBusinessUnitType, businessUnitList } from '../../actions/businessUnitAction'
import AddBusinessUnit from '../../pages/businessUnit/AddBusinessUnit';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    addBusinessUnitType() {
      dispatch(addBusinessUnit()).then(() => {
        dispatch(businessUnitList());
        dispatch({
          type: SET_BUSINESS_UNIT_EDIT_MODE,
          payload: false,
        })
        dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
        dispatch({
          type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
          payload: false,
        })

      });;
    },
    updateBusinessUnitType() {
      dispatch(updateBusinessUnitType()).then(() => {
        dispatch(businessUnitList());
        dispatch({
          type: SET_BUSINESS_UNIT_EDIT_MODE,
          payload: false,
        })
        dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
        dispatch({
          type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
          payload: false,
        })

      });
    },
    closeAddBusinessUnitModal() {
      dispatch({
        type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
        payload: false,
      })
      dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM })
    },
    handleChangeBusinessUnitName(value) {
      dispatch({
        type: BUSINESS_UNIT_NAME,
        payload: value,
      });
    },
    handleBusinessUnitStatus(value) {
      dispatch({
        type: BUSINESS_UNIT_STATUS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const businessUnit = store.getState().businessUnit;
  return {
    businessUnit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessUnit);
