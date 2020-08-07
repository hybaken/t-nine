import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import Cellphone from './../../../containers/Cellphone'

describe('<Dashboard />', () => {
    it('should render Dashboard', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Cellphone)).toHaveLength(1);
    });
})