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
    // assignStructureList() {
    //   dispatch(assignStructureList());
    // },
    // showAddStructureModal() {
    //   dispatch({
    //     type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
    //     payload: true,
    //   })
    //   dispatch({
    //     type: SHOW_ADD_STRUCTURE_MSG,
    //     payload: false,
    //   })
    // },
    // handleMore(id){
    //   dispatch(assignStructureFetch(id));
    //     dispatch({
    //       type: ASSIGN_STRUCTURE_MORE_PAGE,
    //       payload: true,
    //     });
    //     dispatch({
    //       type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
    //       payload: true,
    //     })
      
    // },
    // handleGetComponent(structID,projectID){
    //   dispatch(assignStructureFetch(structID,projectID)).then(() => {
    //     dispatch({
    //       type: ASSIGN_STRUCTURE_MORE_PAGE,
    //       payload: true,
    //     });
    //     dispatch({
    //       type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
    //       payload: true,
    //     })
    //   });
    // },
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
