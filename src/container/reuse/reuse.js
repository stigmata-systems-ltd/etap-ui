import { connect } from 'react-redux';
import store from '../../store';

import {
    PROJECT,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    NUMBER_OF_COMPONENTS,
    DRAWING_NO,
    LENGTH,
    WEIGHT,
    THICKNESS,
    REUSE_WEIGHT,
    PROPOSED_REUSABILITY,
    YEAR_OF_FABRICATION,
    VENDOR_DETAILS,
    EXPECTED_RELEASE_DATE,
    QR_CODE_DETAILS,
    DEPRECIATION_RATE,
    BOOK_VALUE,
    RESET_STRUCTURE_FORM


} from '../../actions/types';
import Reuse from '../../pages/reuse/Reuse';



const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeReuseProjectName(value) {
            dispatch({
                type: PROJECT,
                payload: value,
            });
        },
        handleChangeReuseStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeReuseStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeReuseNumberOfComponents(value) {
            dispatch({
                type: NUMBER_OF_COMPONENTS,
                payload: value,
            });
        },
        handleChangeReuseDrawingNumber(value) {
            dispatch({
                type: DRAWING_NO,
                payload: value,
            });
        },
        handleChangeReuselength(value) {
            dispatch({
                type: LENGTH,
                payload: value,
            });
        },
        handleChangeReuseWeight(value) {
            dispatch({
                type: WEIGHT,
                payload: value,
            });
        },
        handleChangeReuseThickness(value) {
            dispatch({
                type: THICKNESS,
                payload: value,
            });
        },
        handleChangeReuseDataWeight(value) {
            dispatch({
                type: REUSE_WEIGHT,
                payload: value,
            });
        },
        handleChangeReuseProposedReusability(value) {
            dispatch({
                type: PROPOSED_REUSABILITY,
                payload: value,
            });
        },
        handleChangeReuseYearOfFabrication(value) {
            dispatch({
                type: YEAR_OF_FABRICATION,
                payload: value,
            });
        },
        handleChangeReuseVendorDetails(value) {
            dispatch({
                type: VENDOR_DETAILS,
                payload: value,
            });
        },
        handleChangeReuseExpectedRelease(value) {
            dispatch({
                type: EXPECTED_RELEASE_DATE,
                payload: value,
            });
        },
        handleChangeReuseQrCodeDetails(value) {
            dispatch({
                type: QR_CODE_DETAILS,
                payload: value,
            });
        },
        handleChangeReuseDepreciationRate(value) {
            dispatch({
                type: DEPRECIATION_RATE,
                payload: value,
            });
        },
        handleChangeReuseBookValue(value) {
            dispatch({
                type: BOOK_VALUE,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const reuse = store.getState().reuse;
    return {
        reuse,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reuse);
