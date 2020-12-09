import { connect } from 'react-redux';
import store from '../../store';

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,
  CHANGE_ADD_COMPONENT_MODAL_STATUS
} from '../../actions/types';
import {addComponent} from '../../actions/componentAction'
import AddComponent from '../../pages/component/AddComponent';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    addComponentType(){
      dispatch(addComponent());
    },
    closeAddComponentModal(){
      dispatch({
        type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
        payload: false,
      })
    },
    handleChangeComponentType(value) {
      dispatch({
        type: COMPONENT_TYPE,
        payload: value,
      });
    },
  
  };
};

const mapStateToProps = state => {
  const component = store.getState().component;
  return {
    component,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
