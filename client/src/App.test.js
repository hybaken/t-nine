import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Dashboard from './components/UI/Dashboard/Dashboard';

describe('<App />', () => {
    it('should render App', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Dashboard)).toHaveLength(1);
    });
})