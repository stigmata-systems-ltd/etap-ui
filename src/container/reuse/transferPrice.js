import { connect } from 'react-redux';
import store from '../../store';

import {
    MR_NUMBER,
    STRUCTURE_FAMILY,
    COMPONENT_TYPE,
    STRUCTURE_ID,
    COMPONENT_ID,
    QUANTITY_REQUESTED,
    FROM_SITE,
    TO_SITE,
    DISPATCH_ADVICE_NUMBER,
    DISPATCHED_ON,
    QUANTITY_DISPATCHED,
    TRANSFER_PRICE,
    RESET_STRUCTURE_FORM


} from '../../actions/types';
import TransferPrice from '../../pages/reuse/TransferPrice';



const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeTransferPriceMrNumber(value) {
            dispatch({
                type: MR_NUMBER,
                payload: value,
            });
        },
        handleChangeTransferPriceStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeTransferPriceComponentType(value) {
            dispatch({
                type: COMPONENT_TYPE,
                payload: value,
            });
        },
        handleChangeTransferPriceStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeTransferPriceComponentId(value) {
            dispatch({
                type: COMPONENT_ID,
                payload: value,
            });
        },
        handleChangeTransferPriceQuantityRequested(value) {
            dispatch({
                type: QUANTITY_REQUESTED,
                payload: value,
            });
        },
        handleChangeTransferPriceFromSite(value) {
            dispatch({
                type: FROM_SITE,
                payload: value,
            });
        },
        handleChangeTransferPriceToSite(value) {
            dispatch({
                type: TO_SITE,
                payload: value,
            });
        },
        handleChangeTransferPriceDispatchAdviceNumber(value) {
            dispatch({
                type: DISPATCH_ADVICE_NUMBER,
                payload: value,
            });
        },
        handleChangeTransferPriceDispatchedOn(value) {
            dispatch({
                type: DISPATCHED_ON,
                payload: value,
            });
        },
        handleChangeTransferPriceQuantityDispatched(value) {
            dispatch({
                type: QUANTITY_DISPATCHED,
                payload: value,
            });
        },
        handleChangeTransferPriceTransferPrice(value) {
            dispatch({
                type: TRANSFER_PRICE,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const transferPrice = store.getState().transferPrice;
    return {
        transferPrice,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferPrice);
