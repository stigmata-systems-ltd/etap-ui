import { connect } from 'react-redux';
import store from '../../store';

import {
    DISPATCHED_FROM,
    RECEIVED_AT,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    COMPONENT_NAME,
    COMPONENT_ID,
    DRAWING_NO,
    LENGTH,
    WIDTH,
    HEIGHT,
    BREADTH,
    WEIGHT,
    ADDITIONAL_PLATES,
    REMARKS,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';

import StructureModification from '../../pages/modificationManagement/StructureModification';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeStructureModificationDispatchedFrom(value) {
            dispatch({
                type: DISPATCHED_FROM,
                payload: value,
            });
        },
        handleChangeStructureModificationReceivedAt(value) {
            dispatch({
                type: RECEIVED_AT,
                payload: value,
            });
        },
        handleChangeStructureModificationStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeStructureModificationStructuredId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeStructureModificationComponentName(value) {
            dispatch({
                type: COMPONENT_NAME,
                payload: value,
            });
        },
        handleChangeStructureModificationComponentId(value) {
            dispatch({
                type: COMPONENT_ID,
                payload: value,
            });
        },
        handleChangeStructureModificationDrawingNumber(value) {
            dispatch({
                type: DRAWING_NO,
                payload: value,
            });
        },
        handleChangeStructureModificationDimensionsLength(value) {
            dispatch({
                type: LENGTH,
                payload: value,
            });
        },
        handleChangeStructureModificationDimensionsWidth(value) {
            dispatch({
                type: WIDTH,
                payload: value,
            });
        },
        handleChangeStructureModificationDimensionsHeight(value) {
            dispatch({
                type: HEIGHT,
                payload: value,
            });
        },
        handleChangeStructureModificationDimensionsBreadth(value) {
            dispatch({
                type: BREADTH,
                payload: value,
            });
        },
        handleChangeStructureModificationDimensionsWeight(value) {
            dispatch({
                type: WEIGHT,
                payload: value,
            });
        },
        handleChangeStructureModificationLength(value) {
            dispatch({
                type: LENGTH,
                payload: value,
            });
        },
        handleChangeStructureModificationWidth(value) {
            dispatch({
                type: WIDTH,
                payload: value,
            });
        },
        handleChangeStructureModificationHeight(value) {
            dispatch({
                type: HEIGHT,
                payload: value,
            });
        },
        handleChangeStructureModificationBreadth(value) {
            dispatch({
                type: BREADTH,
                payload: value,
            });
        },
        handleChangeStructureModificationWeight(value) {
            dispatch({
                type: WEIGHT,
                payload: value,
            });
        },
        handleChangeStructureModificationAdditionalPlates(value) {
            dispatch({
                type: ADDITIONAL_PLATES,
                payload: value,
            });
        },
        handleChangeStructureModificationRemarks(value) {
            dispatch({
                type: REMARKS,
                payload: value,
            });
        },
    };
};

const mapStateToProps = state => {
    const structureModification = store.getState().structureModification;
    return {
        structureModification,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StructureModification);
