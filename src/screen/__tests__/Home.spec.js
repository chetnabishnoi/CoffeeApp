import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mockVenueList } from '../../sagas/__mocks__/VenueListMock';
import Home from '../Home';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapper;
let getWrapper = () => {
    wrapper = shallow(
        <Provider store={store}>
            <Home
                venueData={mockVenueList} />
        </Provider>
    );
    return wrapper;
};

describe('Home Page', () => {
    beforeAll(() => {
        wrapper = getWrapper();
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
