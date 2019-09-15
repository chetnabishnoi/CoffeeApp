import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { api } from '../../util/ApiService';
import { getVenueList } from '../Home';
import { mockVenueList } from '../__mocks__/VenueListMock';

describe('Venue Sagas', () => {
    it('gets venue list!', () => {
        const mockResponse = { "body": { mockVenueList } };
        return expectSaga(getVenueList)
            .provide([
                [matchers.call.fn(api.getVenueList), mockResponse],
            ])
            .call(api.getVenueList)
            .put({
                type: 'SET_VENUE_LIST',
                payload: { mockVenueList },
            })
            .run();
    });
});