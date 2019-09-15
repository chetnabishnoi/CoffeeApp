
import { GET_VENUE_LIST, SET_VENUE_LIST } from '../../constants/Constants';
import { getVenueList, setVenueList } from '../HomeAction';

describe('Home Actions', () => {
    describe('getVenueList', () => {
        it('should return correct action', () => {
            const action = getVenueList();
            expect(action).toEqual({
                type: GET_VENUE_LIST,
            });
        });
    });

    describe('setVenueList', () => {
        it('should return correct action', () => {
            const mockPayload = { dummy: 'data' }
            const action = setVenueList(mockPayload);
            expect(action).toEqual({
                type: SET_VENUE_LIST,
                payload: mockPayload
            });
        });
    });
});