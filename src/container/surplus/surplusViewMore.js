import { connect } from 'react-redux';
import store from '../../store';
import {assignStructureList,assignStructureFetch} from '../../actions/assignStructureAction';

import {
  CHANGE_VIEW_SURPLUS_MORE_MODAL_STATUS
} from '../../actions/types';
import ViewSurplusViewMore from '../../pages/surplus/ViewSurplusViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeSurplusViewMoreModal(){
      dispatch({
              type: CHANGE_VIEW_SURPLUS_MORE_MODAL_STATUS,
              payload: false,
            })
          }
  };
};

const mapStateToProps = state => {
  const surplus = store.getState().surplus;
  return {
    surplus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSurplusViewMore);
