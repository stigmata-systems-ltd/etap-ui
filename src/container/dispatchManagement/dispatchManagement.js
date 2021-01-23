import { connect } from 'react-redux';
import store from '../../store';
import {
    MR_NUMBER,
    SITE_NAME,
    DATE_OF_REQUEST,
    REQUEST_RAISED_BY,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    QUANTITY_REQUESTED,
    DISPATCH_ADVICE_NUMBER,
    RESET_STRUCTURE_FORM


} from '../../actions/types';
import {getSiteDispatchDetails} from '../../actions/siteDispatch';
import DispatchManagement from '../../pages/dispatch/dispatchManagement';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },
        getSiteDispatchDetails(){
            getSiteDispatchDetails();
        },
        handleChangeDispatchManagementMrNumber(value) {
            dispatch({
                type: MR_NUMBER,
                payload: value,
            });
        },
        handleChangeDispatchManagementSiteName(value) {
            dispatch({
                type: SITE_NAME,
                payload: value,
            });
        },
        handleChangeDispatchManagementDateOfRequest(value) {
            dispatch({
                type: DATE_OF_REQUEST,
                payload: value,
            });
        },
        handleChangeDispatchManagementRequestRaisedBy(value) {
            dispatch({
                type: REQUEST_RAISED_BY,
                payload: value,
            });
        },
        handleChangeDispatchManagementStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeDispatchManagementStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeDispatchManagementQuantityRequested(value) {
            dispatch({
                type: QUANTITY_REQUESTED,
                payload: value,
            });
        },
        handleChangeDispatchManagementDispatchAdviceNumber(value) {
            dispatch({
                type: DISPATCH_ADVICE_NUMBER,
                payload: value,
            });
        },


    };
};

const mapStateToProps = state => {
    const siteDispatch = store.getState().siteDispatch;
    return {
        siteDispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchManagement);
