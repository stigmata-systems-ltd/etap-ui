import { connect } from 'react-redux';
import store from '../../store';

import {
    PROJECT_NAME,
    STRUCTURE_NAME,
    STRUCTURE_TYPE,
    CAPACITY,
    OVER_ALL_LENGTH,
    UNDER_SLING_OVER_SLUNG,
    ESTIMATED_WEIGHT,
    DIAMENSION_LENGTH,
    DIAMENSION_HEIGHT,
    DIAMENSION_WIDTH,
    NUMBER_OF_COMPONENTS,
    RESET_STRUCTURE_FORM,
    DRAWING_NO

} from '../../actions/types';

import AssignStructure from '../../pages/assignStructure/AssignStructure';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeComponentProjectName(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
        },
        handleChangeComponentStructureName(value) {
            dispatch({
                type: STRUCTURE_NAME,
                payload: value,
            });
        },
        handleChangeComponentStructureFamily(value) {
            dispatch({
                type: STRUCTURE_TYPE,
                payload: value,
            });
        },
        // handleChangeComponentCapacity(value) {
        //     dispatch({
        //         type: CAPACITY,
        //         payload: value,
        //     });
        // },
        handleChangeComponentDrawingNumber(value) {
            dispatch({
                type: DRAWING_NO,
                payload: value,
            });
        },
        // handleChangeComponentOverAllLength(value) {
        //     dispatch({
        //         type: OVER_ALL_LENGTH,
        //         payload: value,
        //     });
        // },
        // handleChangeUnderSlungOverSlung(value) {
        //     dispatch({
        //         type: UNDER_SLING_OVER_SLUNG,
        //         payload: value,
        //     });
        // },
        // handleChangeComponentEstimatedWeight(value) {
        //     dispatch({
        //         type: ESTIMATED_WEIGHT,
        //         payload: value,
        //     });
        // },
        // handleChangeDiamensionLength(value) {
        //     dispatch({
        //         type: DIAMENSION_LENGTH,
        //         payload: value,
        //     });
        // },
        // handleChangeDiamensionHeight(value) {
        //     dispatch({
        //         type: DIAMENSION_HEIGHT,
        //         payload: value,
        //     });
        // },
        // handleChangeDiamensionWidth(value) {
        //     dispatch({
        //         type: DIAMENSION_WIDTH,
        //         payload: value,
        //     });
        // },
        handleChangeEstimatedWeight(value) {
            dispatch({
                type: ESTIMATED_WEIGHT,
                payload: value,
            });
        },
        handleChangeNoOfComponents(value) {
            dispatch({
                type: NUMBER_OF_COMPONENTS,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const assignStructure = store.getState().assignStructure;
    return {
        assignStructure,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructure);
