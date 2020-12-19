import { connect } from 'react-redux';
import store from '../../store';

import {

    BUSINESS_UNIT,
    INDEPENDENT_COMPANY,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';

import AddIndependentCompany from '../../pages/independentCompany/AddIndependentCompany';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeIc(value) {
            dispatch({
                type: INDEPENDENT_COMPANY,
                payload: value,
            });
        },
        handleChangeBu(value) {
            dispatch({
                type: BUSINESS_UNIT,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const icbu = store.getState().icbu;
    return {
        icbu,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIndependentCompany);
