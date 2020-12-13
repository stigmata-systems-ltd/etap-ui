import { connect } from 'react-redux';
import Structure from '../../pages/structure/AddStructure';
import store from '../../store';

import {
    VENDOR_NAME,
    VENDOR_CODE,
    VENDOR_EMAIL,
    VENDOR_CONTACT_NUMBER,

    RESET_STRUCTURE_FORM,


} from '../../actions/types';
import AddSubContractor from '../../pages/subcontractor/AddSubContractor';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeVendorName(value) {
            dispatch({
                type: VENDOR_NAME,
                payload: value,
            });
        },
        handleChangeVendorCode(value) {
            dispatch({
                type: VENDOR_CODE,
                payload: value,
            });
        },
        handleChangeVendorEmail(value) {
            dispatch({
                type: VENDOR_EMAIL,
                payload: value,
            });
        },
        handleChangeContactNumber(value) {
            dispatch({
                type: VENDOR_CONTACT_NUMBER,
                payload: value,
            });
        },
      
        
    };
};

const mapStateToProps = state => {
    const addSubContractor = store.getState().addSubContractor;
    return {
        addSubContractor,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubContractor);
