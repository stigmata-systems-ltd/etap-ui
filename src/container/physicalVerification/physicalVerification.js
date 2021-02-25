import { connect } from "react-redux";
import store from "../../store";

import {
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    RESET_PHYSICAL_VERIFICATION_MODAL,
    FROM_DUE,
    TO_DUE,
    

} from "../../actions/types";

import {getPhysicalVerificationDetails } from '../../actions/physicalVerificationAction';
import ViewPhysicalVerification from "../../pages/physicalVerification/ViewPhysicalVerification";

const mapDispatchToProps = (dispatch) => {
    return {
        getPhysicalVerificationDetails() {
            dispatch(getPhysicalVerificationDetails());
        },
        handleChangeFromDue(value) {
            dispatch({
                type: FROM_DUE,
                payload: value,
            });

        },
        handleChangeToDue(value) {
            dispatch({
                type: TO_DUE,
                payload: value,
            });

        },

        // addTransferPrice() {
        //     dispatch(addTransferPrice()).then(() => {

        //         dispatch({
        //             type: SET_SHOW_MORE_MODAL_FLAG,
        //             payload: false,
        //         })
        //         dispatch({ type: RESET_TRANSFER_PRICE_MODAL });
        //         dispatch(getTransferPriceDetails());

        //     });;
        // },


        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },

        showPhysicalVerificationModal(id) {
            dispatch({
                type: SET_SHOW_EDIT_MODAL_FLAG,
                payload: true,
            });
            dispatch({
                type: SET_ACTIVE_ITEM,
                payload: id,
            });

        },
        closePhysicalVerificationModal() {
            dispatch({
                type: SET_SHOW_EDIT_MODAL_FLAG,
                payload: false,
            });
            dispatch({ type: RESET_PHYSICAL_VERIFICATION_MODAL });
        },
       
    };
};

const mapStateToProps = (state) => {
    const physicalVerification = store.getState().physicalVerification;
    return {
        physicalVerification,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPhysicalVerification);
