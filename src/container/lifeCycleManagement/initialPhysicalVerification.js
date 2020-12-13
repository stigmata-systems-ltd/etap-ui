import { connect } from 'react-redux';
import store from '../../store';

import {
    SITE_NAME,
    INSPECTION_ID,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';
import InitiatePhyscialVerification from '../../pages/lifeCycleManagement/InitiatePhysicalVerification';


const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeSite(value) {
            dispatch({
                type: SITE_NAME,
                payload: value,
            });
        },
        handleChangeInspectionId(value) {
            dispatch({
                type: INSPECTION_ID,
                payload: value,
            });
        },


    };
};

const mapStateToProps = state => {
    const initialPhysicalVerification = store.getState().initialPhysicalVerification;
    return {
        initialPhysicalVerification,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitiatePhyscialVerification);
