import { connect } from 'react-redux';
import Component from '../../pages/component/createComponent';
import store from '../../store';

import {
  ADD_COMPONENT,
  PROJECT_NAME,
  STRUCTURE_NAME,
  DRAWING_NO,
  RESET_STRUCTURE_FORM,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },

    handleChangeStructureName(value) {
      dispatch({
        type: STRUCTURE_NAME,
        payload: value,
      });
    },
    handleChangeProjectName(value) {
      dispatch({
        type: PROJECT_NAME,
        payload: value,
      });
    },
    handleChangeDrawingNo(value) {
      dispatch({
        type: DRAWING_NO,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const structure = store.getState().structure;
  return {
    structure,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
