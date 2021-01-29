import { connect } from "react-redux";
import {
  getSiteReqDetails,
  getSiteReqDetailsById,
} from "../../actions/createDispatchActions";
import { RESET_MESSAGE } from "../../actions/types";
import CreateDispatch from "../../pages/createDispatch/CreateDispatch";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSiteReqDetails() {
      dispatch(getSiteReqDetails());
    },
    redirectToDispatchStructure(id) {
      props.history.push(
        `/dispatch/createDispatch/dispatchStructure/${window.btoa(id)}`
      );
    },
    resetMessage() {
      dispatch({
        type: RESET_MESSAGE,
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
