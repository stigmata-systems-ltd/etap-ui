import { connect } from 'react-redux';
import Structure from '../../pages/structure/AddStructure';
import store from '../../store';

import {

    RESET_STRUCTURE_FORM,
    WORK_BREAK_PROJECT_NAME,

} from '../../actions/types';

import AddWorkBreak from '../../pages/workBreak/AddWorkBreak';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeProjectName(value) {
            dispatch({
                type: WORK_BREAK_PROJECT_NAME,
                payload: value,
            });
        },


    };
};

const mapStateToProps = state => {
    const addWorkBreak = store.getState().addWorkBreak;
    return {
        addWorkBreak,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkBreak);
