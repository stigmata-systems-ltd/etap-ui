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
    SCRAP_PROJECT_ID,
    SCRAP_STRUCTURE_ID,
    SCRAP_DATE,
    RESET_SCRAP_FORM,
    SCRAP_FILE,
    SCRAP_STRUCTURE_FAMILY,
    SCRAP_STRUCTURE_CODE,
    SCRAP_VENDOR,
    SCRAP_AUCTION_ID,
    SCRAP_RATE
} from '../../actions/types';
import AddScrap from '../../pages/scrap/AddScrap';
import {getVendorList,getProjectList,getWBSList,addScrap,getProjectStructureData,getScrap} from '../../actions/scrapAction';
const mapDispatchToProps = dispatch => {
    return {
        saveScrap(){
            dispatch(addScrap()).then(() => {
                dispatch({ type: RESET_SCRAP_FORM })
            });
        },
        getScrap(){
            dispatch(getScrap());
        },
        resetScrap() {
            dispatch({ type: RESET_SCRAP_FORM });
        },
        handleFileUpload(data) {
            console.log(data.name);
            console.log(data);
            dispatch({
              type: SCRAP_FILE,
              payload: data,
            });
          },
        handleChangeRequirementProjectName(value) {
            dispatch({
                type: SCRAP_PROJECT_ID,
                payload: value,
            });
            dispatch(getProjectStructureData());
        },
        handleChangeVendorName(value) {
            dispatch({
                type: SCRAP_VENDOR,
                payload: value,
            });
            
        },
        
        handleChangeScrapRate(value) {
            dispatch({
                type: SCRAP_RATE,
                payload: value,
            });
            
        },
        handleChangeAuctionID(value) {
            dispatch({
                type: SCRAP_AUCTION_ID,
                payload: value,
            });
            
        },
        handleChangeStructureList(value) {
            const scrap = store.getState().scrap;
            let structFamilyName = scrap.structureProjectList.filter((ele) => {
                return (ele.projectId === scrap.projectName.value && ele.structureId === value.value) 
              }).map((ele) => {return ele.strcutureTypeName});
              let structureCode = "";
              let strcutureTypeName=""
              scrap.structureProjectList.map(dt => {
                if(dt.structureId === value.value) {
                    structureCode = dt.structureCode
                    
                }
              })
            dispatch({
                type: SCRAP_STRUCTURE_ID,
                payload: value,
            });
            dispatch({
                type: SCRAP_STRUCTURE_FAMILY,
                payload: structFamilyName[0],
            });
            dispatch({
                type: SCRAP_STRUCTURE_CODE,
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
        handleScrapFromChange(value) {
            dispatch({
                type: SCRAP_DATE,
                payload: value,
            });
        },
        getProjectList(){
            dispatch(getProjectList());
        },
        getVendorList(){
            dispatch(getVendorList());
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
    const scrap = store.getState().scrap;
    return {
        scrap,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScrap);
