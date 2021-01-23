import store from "../../store";
import { connect } from "react-redux";
import DropDownNav from "../../common/header/DropDownNav";
import { withRouter } from "react-router-dom";
import { authenticateUser, setPageAccess } from "../../actions/authActions";
import { SET_USERNAME, SET_PASSWORD, SET_TOKEN, RESET_LOGIN_DETAILS, SET_ROLE_BASED_ROUTE_ACCESS } from "../../actions/types";
import { setAuthTokens, isUserLoggedIn } from "../../utils/auth";
import { setRoleBasedRoutes } from "../../utils/pageAccess";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout(e) {
      e.preventDefault();
      dispatch(logout()).then(() => {
        dispatch({ type: RESET_LOGIN_DETAILS })
        dispatch({
          type: SET_TOKEN,
          payload: ''
        })
        ownProps.history.push('/login');
      });
    },
  };
};

const mapStateToProps = (state) => {
  const auth = store.getState().auth;
  return {
    auth,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DropDownNav));
