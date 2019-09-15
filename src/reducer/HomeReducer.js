import { SET_VENUE_LIST } from '../constants/Constants';

const initialState = {
    venueList: {}
};

export const homeStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VENUE_LIST:
            return {
                ...state,
                venueList: action.payload
            };
        default:
            return state;
    }
};
