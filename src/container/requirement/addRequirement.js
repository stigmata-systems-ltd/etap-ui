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
    RESET_REQUIREMENT_FORM,
    SITE_REQUIRMENT_LIST
} from '../../actions/types';
import AddRequirement from '../../pages/requirements/AddRequirements';
import {getProjectList,getWBSList, addSiteRequirement,addRequirement,getProjectStructureData} from '../../actions/requirementAction'
const mapDispatchToProps = dispatch => {
    return {
        saveRequirement(){
            dispatch(addRequirement()).then(() => {
                dispatch({ type: RESET_REQUIREMENT_FORM })
            });
        },
        resetRequirement() {
            dispatch({ type: RESET_REQUIREMENT_FORM });
        },

        handleChangeRequirementProjectName(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
            dispatch(getProjectStructureData());
        },

        // handleChangeRequirementStructureName(value,i) {
        //     dispatch({
        //         type: STRUCTURE_NAME,
        //         payload: value,
        //     });
        // },
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
        getProjectList(){
            dispatch(getProjectList());
        },
        getWBSList(){
            dispatch(getWBSList());
        },
        addSiteRequirement(){
            dispatch(addSiteRequirement());
        },
        onStructureIDChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].structId = parseInt(value);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        handleStructureNameChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].structName = value;
            let structFamilyName = requirement.structureProjectList.filter((ele) => {
                return (ele.projectId === requirement.projectName.value && ele.structureId === value.value) 
              }).map((ele) => {return ele.strcutureTypeName});
            requirement.siteRequirementList[i].structFamily = structFamilyName[0];
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        ondrawingNumberChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].drawingNo = value;
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        onQuantityChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].quantity = parseInt(value);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        onSiteRequirementRemove(i){
            const requirement = store.getState().requirement;
            const siteRequirementList = [...requirement.siteRequirementList];
            siteRequirementList.splice(i, 1);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: siteRequirementList,
            });
        }
    };
};

const mapStateToProps = state => {
    const requirement = store.getState().requirement;
    return {
        requirement,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRequirement);
