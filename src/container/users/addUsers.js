import { connect } from 'react-redux';
import Structure from '../../pages/structure/AddStructure';
import store from '../../store';

import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PS_NO,
  USER_ROLE,
  RESET_STRUCTURE_FORM,
  PROJECT,
  BUSINESS_UNIT,
  SEGMENT,
  INDEPENDENT_COMPANY
  
} from '../../actions/types';
import AddUsers from '../../pages/users/AddUsers';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },

    handleChangeFirstName(value) {
      dispatch({
        type: FIRST_NAME,
        payload: value,
      });
    },
    handleChangeLastName(value) {
      dispatch({
        type: LAST_NAME,
        payload: value,
      });
    },
    handleChangeEmail(value) {
      dispatch({
        type: EMAIL,
        payload: value,
      });
    },
    handleChangePsNo(value) {
      dispatch({
        type: PS_NO,
        payload: value,
      });
    },
    handleChangeProject(value) {
      dispatch({
        type: PROJECT,
        payload: value,
      });
    },
    handleChangeBusinessUnit(value) {
      dispatch({
        type: BUSINESS_UNIT,
        payload: value,
      });
    },
    handleChangeSegment(value) {
      dispatch({
        type: SEGMENT,
        payload: value,
      });
    },
    handleIndependentCompany(value) {
      dispatch({
        type: INDEPENDENT_COMPANY,
        payload: value,
      });
    },
    handleChangeRole(value) {
      dispatch({
        type: USER_ROLE,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const addusers = store.getState().addusers;
  return {
    addusers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
