import { connect } from "react-redux";
import store from "../../store";

import {
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    TRANSFER_PRICE,
    RESET_TRANSFER_PRICE_MODAL,
    
    
} from "../../actions/types";

import TransferPrice from "../../pages/transferPrice/TransferPrice";
import {getTransferPriceDetails} from '../../actions/transferPriceAction';

const mapDispatchToProps = (dispatch) => {
    return {
        getTransferPriceDetails() {
            dispatch(getTransferPriceDetails());
        },
        handleTransferPrice(value) {
            dispatch({
                type: TRANSFER_PRICE,
                payload: value,
            });
        },

        setShowTableFlag(value) {
            dispatch({
                type: SET_SHOW_TABLE_FLAG,
                payload: value,
            });
        },

        showTransferPriceModal(id) {
            dispatch({
                type: SET_SHOW_EDIT_MODAL_FLAG,
                payload: true,
            });
            dispatch({
                type: SET_ACTIVE_ITEM,
                payload: id,
            });

        },
        closeTransferPriceModal() {
            dispatch({
                type: SET_SHOW_EDIT_MODAL_FLAG,
                payload: false,
            });
            dispatch({ type: RESET_TRANSFER_PRICE_MODAL });
        },

    };
};

const mapStateToProps = (state) => {
    const transferPrice = store.getState().transferPrice;
    return {
        transferPrice,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferPrice);
