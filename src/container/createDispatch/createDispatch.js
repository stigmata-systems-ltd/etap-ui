import { connect } from "react-redux";
import { getSiteReqDetails } from "../../actions/createDispatchActions";
import { SET_SELECTED_ITEMS } from "../../actions/types";

import CreateDispatch from "../../pages/createDispatch/CreateDispatch";

const mapDispatchToProps = (dispatch) => {
  return {
    getSiteReqDetails() {
      dispatch(getSiteReqDetails());
    },
    setSelectedStructures(value) {
      dispatch({
        type: SET_SELECTED_ITEMS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const createDispatch = state.createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDispatch);
