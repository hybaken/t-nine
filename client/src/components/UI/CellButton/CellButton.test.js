import React from 'react';
import { shallow } from 'enzyme';
import CellButton from './CellButton';
import Button from '@material-ui/core/Button';

describe('<CellButton />', () => {
    it('should render cellbutton and bound on click function.', () => {
        const text = 'text';
        const subtext = 'subtext';
        const mockCallBack = jest.fn();

        const wrapper = shallow(<CellButton size={4} text={text} subtext={subtext} action={mockCallBack}/>);
        
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find('span')).toHaveLength(2);
        expect(wrapper.find('span').first().text()).toBe(text);
        expect(wrapper.find('span').last(1).text()).toBe(subtext);

        const button = wrapper.find(Button).simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });
})