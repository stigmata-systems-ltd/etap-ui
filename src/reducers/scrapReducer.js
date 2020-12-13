import {
    PROJECT_NAME,
    VENDOR,
    STRUCTURE_NAME,
    SCRAP_RATE,
    STRUCTURE_FAMILY,
    AUCTION_ID,
    STRUCTURE_ID,
    RESET_STRUCTURE_FORM

} from '../actions/types';

const initialState = {
    projectName: '',
    vendor: '',
    structure: '',
    scrapRate: '',
    structureFamily: '',
    auctionId: '',
    structureId: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload,
            };
        case VENDOR:
            return {
                ...state,
                vendor: action.payload,
            };
        case STRUCTURE_NAME:
            return {
                ...state,
                structure: action.payload,
            };
        case SCRAP_RATE:
            return {
                ...state,
                scrapRate: action.payload,
            };
        case STRUCTURE_FAMILY:
            return {
                ...state,
                structureFamily: action.payload,
            };
        case AUCTION_ID:
            return {
                ...state,
                auctionId: action.payload,
            };
        case STRUCTURE_ID:
            return {
                ...state,
                structureId: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                projectName: '',
                vendor: '',
                structure: '',
                scrapRate: '',
                structureFamily: '',
                auctionId: '',
                structureId: ''
            };
        default:
            return state;
    }
}
