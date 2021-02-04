import { connect } from "react-redux";
import store from "../../store";

import {
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_SHOW_TABLE_FLAG,
    SET_ACTIVE_ITEM,
    TRANSFER_PRICE,
    RESET_TRANSFER_PRICE_MODAL,
    SET_SHOW_MORE_MODAL_FLAG,
    RESET_TRANSFER_PRICE_VIEW_MORE_MODAL,
    

} from "../../actions/types";

import TransferPrice from "../../pages/transferPrice/TransferPrice";
import { addTransferPrice, getTransferPriceDetails } from '../../actions/transferPriceAction';

const mapDispatchToProps = (dispatch) => {
    return {
        getTransferPriceDetails() {
            dispatch(getTransferPriceDetails());
        },
        handleChangeTransferPrice(value) {
            dispatch({
                type: TRANSFER_PRICE,
                payload: value,
            });

        },

        addTransferPrice() {
            dispatch(addTransferPrice()).then(() => {

                dispatch({
                    type: SET_SHOW_MORE_MODAL_FLAG,
                    payload: false,
                })
                dispatch({ type: RESET_TRANSFER_PRICE_MODAL });
                dispatch(getTransferPriceDetails());

            });;
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
        showTransferPriceViewMoreModal(id) {
            dispatch({
                type: SET_SHOW_MORE_MODAL_FLAG,
                payload: true,
            });
            dispatch({
                type: SET_ACTIVE_ITEM,
                payload: id,
            });

        },
        closeTransferPriceViewMoreModal() {
            dispatch({
                type: SET_SHOW_MORE_MODAL_FLAG,
                payload: false,
            });
            dispatch({ type: RESET_TRANSFER_PRICE_VIEW_MORE_MODAL });
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
