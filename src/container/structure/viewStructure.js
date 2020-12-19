import { connect } from 'react-redux';
import store from '../../store';
import {structureList} from '../../actions/structureAction';

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG
} from '../../actions/types';
import ViewStructure from '../../pages/structure/ViewStructure';

const mapDispatchToProps = dispatch => {
  return {
    structureList() {
      dispatch(structureList());
    },
    showAddStructureModal() {
      dispatch({
        type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
        payload: true,
      })
      dispatch({
        type: SHOW_ADD_STRUCTURE_MSG,
        payload: false,
      })
    },
  };
};

const mapStateToProps = state => {
  const structure = store.getState().structure;
  return {
    structure,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructure);
