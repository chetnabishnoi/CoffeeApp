import { SET_REVIEWS, SET_VENUE_DETAIL } from '../constants/Constants';

const initialState = {
    venueDetail: {},
    reviews: []
};

export const detailStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VENUE_DETAIL:
            return {
                ...state,
                venueDetail: action.payload
            };

        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            };
        default:
            return state;
    }
};
