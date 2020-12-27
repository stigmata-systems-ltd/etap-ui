import { connect } from 'react-redux';
import store from '../../store';
import {assignStructureList,assignStructureFetch} from '../../actions/assignStructureAction';

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  STRUCTURE_EDIT_PAGE,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS
} from '../../actions/types';
import AssignStructureViewMore from '../../pages/assignStructure/AssignStructureViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeAssignStructureViewMoreModal(){
      dispatch({
              type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
              payload: false,
            })
          }
  };
};

const mapStateToProps = state => {
  const assignStructure = store.getState().assignStructure;
  return {
    assignStructure,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructureViewMore);
