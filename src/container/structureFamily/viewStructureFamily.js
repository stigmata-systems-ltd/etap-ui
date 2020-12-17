import { connect } from 'react-redux';
import store from '../../store';
import {structureFamilyList, getSingleStructureFamilyType} from '../../actions/structureFamilyAction';

import { CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS, SET_STRUCTURE_FAMILY_EDIT_MODE, SHOW_ADD_STRUCTURE_FAMILY_MSG, STRUCTURE_FAMILY_TYPE, STRUCTURE_FAMILY_TYPE_STATUS } from '../../actions/types';

import ViewStructureFamily from '../../pages/structureFamily/ViewStructureFamily';

const mapDispatchToProps = dispatch => {
  return {
    structureFamilyList() {
      dispatch(structureFamilyList());
    },

    handleChangeStructureFamilyType(value) {
      dispatch({
        type: STRUCTURE_FAMILY_TYPE,
        payload: value,
      });
    },
    handleStructureFamilyTypeStatus(value) {
        dispatch({
          type: STRUCTURE_FAMILY_TYPE_STATUS,
          payload: value,
        });
      },
    showAddStructureFamilyModal() {
        dispatch({
          type: CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
          payload: true,
        })
        dispatch({
          type: SHOW_ADD_STRUCTURE_FAMILY_MSG,
          payload: false,
        })
      },
      handleEdit(id) {
        dispatch({
          type: CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
          payload: true,
        })
        dispatch({
          type: SET_STRUCTURE_FAMILY_EDIT_MODE,
          payload: true,
        })
        dispatch(getSingleStructureFamilyType(id));
     },
  };
};

const mapStateToProps = state => {
  const structureFamily = store.getState().structureFamily;
  console.log("Structcure Family-----> " , structureFamily)

  return {
    structureFamily,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructureFamily);
