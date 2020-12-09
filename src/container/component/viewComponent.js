import { connect } from 'react-redux';
import store from '../../store';
import {componentList} from '../../actions/componentAction';

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,
  CHANGE_ADD_COMPONENT_MODAL_STATUS,
  SHOW_ADD_COMPONENT_MSG
} from '../../actions/types';
import ViewComponent from '../../pages/component/ViewComponent';

const mapDispatchToProps = dispatch => {
  return {
    componentList() {
      dispatch(componentList());
    },

    handleChangeComponentType(value) {
      dispatch({
        type: COMPONENT_TYPE,
        payload: value,
      });
    },
    showAddComponentModal() {
        dispatch({
          type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
          payload: true,
        })
        dispatch({
          type: SHOW_ADD_COMPONENT_MSG,
          payload: false,
        })
      },
  };
};

const mapStateToProps = state => {
  const component = store.getState().component;
  return {
    component,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewComponent);
