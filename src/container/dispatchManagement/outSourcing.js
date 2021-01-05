import { connect } from 'react-redux';
import store from '../../store';
import {
    PROJECT_NAME,
    VENDOR,
    STRUCTURE_FAMILY,
    MONTHLY_RENT,
    STRUCTURE_ID,
    CONTRACT_YEARS,
    NUMBER_OF_COMPONENTS,
    PLANNED_RELEASE_DATE,
    WEIGHT,
    ACTUAL_START_DATE_OF_USAGE,
    EXPECTED_RELEASE_DATE,
    RESET_STRUCTURE_FORM


} from '../../actions/types';
import OutSourcing from '../../pages/dispatchManagement/OutSourcing';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeOutsourcingProjectName(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
        },
        handleChangeOutsourcingVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeOutsourcingStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeOutsourcingMonthlyRent(value) {
            dispatch({
                type: MONTHLY_RENT,
                payload: value,
            });
        },
        handleChangeOutsourcingStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeOutsourcingContractYears(value) {
            dispatch({
                type: CONTRACT_YEARS,
                payload: value,
            });
        },
        handleChangeOutsourcingNumberOfComponents(value) {
            dispatch({
                type: NUMBER_OF_COMPONENTS,
                payload: value,
            });
        },
        handleChangeOutsourcingPlannedReleaseDate(value) {
            dispatch({
                type: PLANNED_RELEASE_DATE,
                payload: value,
            });
        },
        handleChangeOutsourcingWeight(value) {
            dispatch({
                type: WEIGHT,
                payload: value,
            });
        },
        handleChangeOutsourcingActualStartDateOfUsage(value) {
            dispatch({
                type: ACTUAL_START_DATE_OF_USAGE,
                payload: value,
            });
        },
        handleChangeOutsourcingExpectedReleaseDate(value) {
            dispatch({
                type: EXPECTED_RELEASE_DATE,
                payload: value,
            });
        },


    };
};

const mapStateToProps = state => {
    const dispatchManagement = store.getState().dispatchManagement;
    return {
        dispatchManagement,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutSourcing);
