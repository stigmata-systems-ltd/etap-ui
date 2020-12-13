import { connect } from 'react-redux';
import store from '../../store';

import {
    DC_NUMBER,
    QUANTITY_REQUESTED,
    VENDOR,
    TO_SITE,
    DISPATCHED_DATE,
    MONTHLY_HIRE_CHARGES,
    QUANTITY_DISPATCHED,
    WORK_ORDER,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';

import OutSource from '../../pages/outsource/Outsource';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeOutSourceDcNumber(value) {
            dispatch({
                type: DC_NUMBER,
                payload: value,
            });
        },
        handleChangeOutSourceQuantityRequested(value) {
            dispatch({
                type: QUANTITY_REQUESTED,
                payload: value,
            });
        },
        handleChangeOutSourceVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeOutSourceToSite(value) {
            dispatch({
                type: TO_SITE,
                payload: value,
            });
        },
        handleChangeOutSourceDispatchedDate(value) {
            dispatch({
                type: DISPATCHED_DATE,
                payload: value,
            });
        },
        handleChangeOutSourceMonthlyHireCharges(value) {
            dispatch({
                type: MONTHLY_HIRE_CHARGES,
                payload: value,
            });
        },
        handleChangeOutSourceQuantityDispatched(value) {
            dispatch({
                type: QUANTITY_DISPATCHED,
                payload: value,
            });
        },
        handleChangeOutSourceWorkOrderNumber(value) {
            dispatch({
                type: WORK_ORDER,
                payload: value,
            });
        },
    };
};

const mapStateToProps = state => {
    const outSource = store.getState().outSource;
    return {
        outSource,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutSource);
