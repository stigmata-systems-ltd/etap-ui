import { connect } from 'react-redux';
import Structure from '../../pages/structure/AddStructure';
import store from '../../store';

import {
  ADD_STRUCTURE,
  STRUCTURE_TYPE,
  STRUCTURE_NAME,
  DRAWING_NO,
  RESET_STRUCTURE_FORM,
  STRUCTURE_ID,
  STRUCTURE_WEIGHT,
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
    handleChangeStructureId(value) {
      dispatch({
        type: STRUCTURE_ID,
        payload: value,
      });
    },
    handleChangeStructureType(value) {
      dispatch({
        type: STRUCTURE_TYPE,
        payload: value,
      });
    },
    handleChangeStructureWeight(value) {
      dispatch({
        type: STRUCTURE_WEIGHT,
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

export default connect(mapStateToProps, mapDispatchToProps)(Structure);
