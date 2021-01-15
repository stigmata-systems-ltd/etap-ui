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
    SITE_REQUIRMENT_LIST,
    SURPLUS_PROJECT_ID,
    SURPLUS_STRUCTURE_ID,
    SURPLUS_DATE,
    RESET_SURPLUS_FORM,
    SURPLUS_FILE,
    SURPLUS_STRUCTURE_FAMILY,
    SURPLUS_STRUCTURE_CODE
} from '../../actions/types';
import AddSurplus from '../../pages/surplus/AddSurplus';
import {getProjectList,getWBSList,addSurplus,getProjectStructureData,getSurplus} from '../../actions/surplusAction';
const mapDispatchToProps = dispatch => {
    return {
        saveSurplus(){
            dispatch(addSurplus()).then(() => {
                dispatch({ type: RESET_SURPLUS_FORM })
            });
        },
        getSurplus(){
            dispatch(getSurplus());
        },
        resetSurplus() {
            dispatch({ type: RESET_SURPLUS_FORM });
        },
        handleFileUpload(data) {
            console.log(data.name);
            console.log(data);
            dispatch({
              type: SURPLUS_FILE,
              payload: data,
            });
          },
        handleChangeRequirementProjectName(value) {
            dispatch({
                type: SURPLUS_PROJECT_ID,
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
        handleChangeStructureList(value) {
            const surplus = store.getState().surplus;
            let structFamilyName = surplus.structureProjectList.filter((ele) => {
                return (ele.projectId === surplus.projectName.value && ele.structureId === value.value) 
              }).map((ele) => {return ele.strcutureTypeName});
              let structureCode = "";
              surplus.structureProjectList.map(dt => {
                if(dt.structureId === value.value) {
                    structureCode = dt.structureCode
                }
              })
            dispatch({
                type: SURPLUS_STRUCTURE_ID,
                payload: value,
            });
            dispatch({
                type: SURPLUS_STRUCTURE_FAMILY,
                payload: value,
            });
            dispatch({
                type: SURPLUS_STRUCTURE_CODE,
                payload: structureCode,
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
        handleSurplusFromChange(value) {
            dispatch({
                type: SURPLUS_DATE,
                payload: value,
            });
        },
        getProjectList(){
            dispatch(getProjectList());
        },
        getWBSList(){
            dispatch(getWBSList());
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
    const surplus = store.getState().surplus;
    return {
        surplus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSurplus);
