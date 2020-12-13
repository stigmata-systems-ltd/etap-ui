import { connect } from 'react-redux';

import store from '../../store';

import {
    PROJECT_NAME,
    STRUCTURE_NAME,
    STRUCTURE_ID,
    NUMBER_OF_COMPONENTS,
    DRAWING_NO,
    QUANTITY,
    REQUIRED_FOR_WORK_BREAK,
    REQUIRED_BY,
    ACTUAL_WORK_BREAK,
    PLANNED_START_DATE,
    ACTUAL_START_DATE_OF_USAGE,
    PLANNED_RELEASE_DATE,
    EXPECTED_RELEASE_DATE,
    MR_NUMBER,
    REMARKS,
    RESET_STRUCTURE_FORM

} from '../../actions/types';
import AddRequirement from '../../pages/requirements/AddRequirements';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeRequirementProjectName(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
        },
        handleChangeRequirementStructureName(value) {
            dispatch({
                type: STRUCTURE_NAME,
                payload: value,
            });
        },
        handleChangeRequirementStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeRequirementNumberOfComponents(value) {
            dispatch({
                type: NUMBER_OF_COMPONENTS,
                payload: value,
            });
        },
        handleChangeRequirementDrawingNumber(value) {
            dispatch({
                type: DRAWING_NO,
                payload: value,
            });
        },
        handleChangeRequirementQuantity(value) {
            dispatch({
                type: QUANTITY,
                payload: value,
            });
        },
        handleChangeRequirementRequiredWorkBreak(value) {
            dispatch({
                type: REQUIRED_FOR_WORK_BREAK,
                payload: value,
            });
        },
        handleChangeRequirementRequiredBy(value) {
            dispatch({
                type: REQUIRED_BY,
                payload: value,
            });
        },
        handleChangeRequirementActualWorkBreak(value) {
            dispatch({
                type: ACTUAL_WORK_BREAK,
                payload: value,
            });
        },
        handleChangeRequirementPlannedStartDate(value) {
            dispatch({
                type: PLANNED_START_DATE,
                payload: value,
            });
        },
        handleChangeRequirementActualStartDateOfUsage(value) {
            dispatch({
                type: ACTUAL_START_DATE_OF_USAGE,
                payload: value,
            });
        },
        handleChangeRequirementPlannedReleaseDate(value) {
            dispatch({
                type: PLANNED_RELEASE_DATE,
                payload: value,
            });
        },
        handleChangeRequirementExpectedReleaseDate(value) {
            dispatch({
                type: EXPECTED_RELEASE_DATE,
                payload: value,
            });
        },
        handleChangeRequirementMrNo(value) {
            dispatch({
                type: MR_NUMBER,
                payload: value,
            });
        },
        handleChangeRequirementRemarks(value) {
            dispatch({
                type: REMARKS,
                payload: value,
            });
        },
    };
};

const mapStateToProps = state => {
    const addRequirement = store.getState().addRequirement;
    return {
        addRequirement,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRequirement);
