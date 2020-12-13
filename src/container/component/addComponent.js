import { connect } from 'react-redux';
import store from '../../store';

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,

} from '../../actions/types';
import AddComponent from '../../pages/component/AddComponent';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
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
