import {
    COMPONENT_TYPE,
    RESET_STRUCTURE_FORM,

} from '../actions/types';

const initialState = {
    componentType: '',

};

export default function (state = initialState, action) {
    switch (action.type) {
        case COMPONENT_TYPE:
            return {
                ...state,
                componentType: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                componentType: '',

            };
        default:
            return state;
    }
}
