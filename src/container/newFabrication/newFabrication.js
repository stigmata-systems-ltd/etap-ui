import { connect } from 'react-redux';
import store from '../../store';

import {
    DC_NUMBER,
    VENDOR,
    DISPATCHED_DATE,
    TO_SITE,
    QUANTITY_DISPATCHED,
    WORK_ORDER,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';

import NewFabrication from '../../pages/newFabrication/NewFabrication';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeVendorDcNumber(value) {
            dispatch({
                type: DC_NUMBER,
                payload: value,
            });
        },
        handleChangeVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeVendorDispatchedDate(value) {
            dispatch({
                type: DISPATCHED_DATE,
                payload: value,
            });
        },
        handleChangeVendorToSite(value) {
            dispatch({
                type: TO_SITE,
                payload: value,
            });
        },
        handleChangeVendorQuantityDispatched(value) {
            dispatch({
                type: QUANTITY_DISPATCHED,
                payload: value,
            });
        },
        handleChangeVendorWorkOrder(value) {
            dispatch({
                type: WORK_ORDER,
                payload: value,
            });
        },
    };
};

const mapStateToProps = state => {
    const newFabrication = store.getState().newFabrication;
    return {
        newFabrication,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFabrication);
