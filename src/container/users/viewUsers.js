import { connect } from 'react-redux';
import store from '../../store';
import {usersList} from '../../actions/usersAction';

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,
  CHANGE_ADD_USERS_MODAL_STATUS,
  SHOW_ADD_USERS_MSG,
  SET_COMPONENT_EDIT_MODE,
  COMPONENT_TYPE_STATUS
} from '../../actions/types';
import ViewUsers from '../../pages/users/ViewUsers';

const mapDispatchToProps = dispatch => {
  return {
    usersList() {
      dispatch(usersList());
    },
    showAddUsersModal() {
      dispatch({
        type: CHANGE_ADD_USERS_MODAL_STATUS,
        payload: true,
      })
      dispatch({
        type: SHOW_ADD_USERS_MSG,
        payload: false,
      })
    },
  };
};

const mapStateToProps = state => {
  const users = store.getState().users;
  return {
    users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);
