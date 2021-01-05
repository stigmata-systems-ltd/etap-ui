import { connect } from 'react-redux';
import store from '../../store';

import {
    MR_NUMBER,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    QUANTITY,
    DISPATCH,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';

import InitiatingReuse from '../../pages/initiatingReuse/InitiatingReuse';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeMrNumber(value) {
            dispatch({
                type: MR_NUMBER,
                payload: value,
            });
        },
        handleChangeStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeQuantity(value) {
            dispatch({
                type: QUANTITY,
                payload: value,
            });
        },
        handleChangeDispatch(value) {
            dispatch({
                type: DISPATCH,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const initiatingReuse = store.getState().initiatingReuse;
    return {
        initiatingReuse,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitiatingReuse);
