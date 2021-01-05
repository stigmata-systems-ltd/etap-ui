import { connect } from 'react-redux';
import store from '../../store';

import {
    DC_NUMBER,
    QUANTITY_REQUESTED,
    VENDOR,
    DISPATCHED_DATE,
    TO_SITE,
    QUANTITY_DISPATCHED,
    WORK_ORDER,
    RESET_STRUCTURE_FORM,
    MONTHLY_HIRE_CHARGES

} from '../../actions/types';

import Vendor from '../../pages/outsourceVendor/Vendor';

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
        handleChangeVendorQuantityRequested(value) {
            dispatch({
                type: QUANTITY_REQUESTED,
                payload: value,
            });
        },
        handleChangeVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeVendorToSite(value) {
            dispatch({
                type: TO_SITE,
                payload: value,
            });
        },
        handleChangeVendorDispatchedDate(value) {
            dispatch({
                type: DISPATCHED_DATE,
                payload: value,
            });
        },
        handleChangeVendorMonthlyHireCharges(value) {
            dispatch({
                type: MONTHLY_HIRE_CHARGES,
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
    const vendor = store.getState().vendor;
    return {
        vendor,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
