import { connect } from 'react-redux';
import store from '../../store';

import {
    PROJECT_NAME,
    VENDOR,
    STRUCTURE_NAME,
    SCRAP_RATE,
    STRUCTURE_FAMILY,
    AUCTION_ID,
    STRUCTURE_ID,
    RESET_STRUCTURE_FORM
} from '../../actions/types';
import Scrap from '../../pages/scrap/Scrap';



const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeScrapProjectName(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
        },
        handleChangeScrapVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeScrapStructureName(value) {
            dispatch({
                type: STRUCTURE_NAME,
                payload: value,
            });
        },
        handleChangeScrapRate(value) {
            dispatch({
                type: SCRAP_RATE,
                payload: value,
            });
        },
        handleChangeScrapStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeScrapAuctionId(value) {
            dispatch({
                type: AUCTION_ID,
                payload: value,
            });
        },
        handleChangeScrapStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const scrap = store.getState().scrap;
    return {
        scrap,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scrap);
