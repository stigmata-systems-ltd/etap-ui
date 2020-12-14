import { connect } from 'react-redux';
import store from '../../store';

import {
    INDEPENDENT_COMPANY,
    BUSINESS_UNIT,
    RESET_STRUCTURE_FORM,

} from '../../actions/types';
import AddIndependentCompany from '../../pages/independentCompany/AddIndependentCompany';
import { addIndependentCompany } from '../../actions/icbuAction';


const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeIndependentCompany(value) {
            dispatch({
                type: INDEPENDENT_COMPANY,
                payload: value,
            });
        },
        handleChangeBusinessUnit(value) {
            dispatch({
                type: BUSINESS_UNIT,
                payload: value,
            });
        },
        independentCompany() {
            dispatch(addIndependentCompany());
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
