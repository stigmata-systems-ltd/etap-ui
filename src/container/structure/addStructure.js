import { connect } from 'react-redux';
import Structure from '../../pages/structure/AddStructure';
import store from '../../store';

import {

  STRUCTURE_NAME,

  RESET_STRUCTURE_FORM,
  
  STRUCTURE_FAMILY,
  NUMBER_OF_ATTRIBUTES
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
    handleChangeStructureFamily(value) {
      dispatch({
        type: STRUCTURE_FAMILY,
        payload: value,
      });
    },
    handleChangeNumberOfAttributes(value) {
      dispatch({
        type: NUMBER_OF_ATTRIBUTES,
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
