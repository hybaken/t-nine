import React from 'react';
import { shallow } from 'enzyme';
import Cellphone from './Cellphone';
import CellButton from '../components/UI/CellButton/CellButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

describe('<Cellphone />', () => {
    it('should render cellphone with display and buttons', () => {
        const wrapper = shallow(<Cellphone />);

        expect(wrapper.find(CellButton)).toHaveLength(15);
        expect(wrapper.find(Paper)).toHaveLength(1);
        expect(wrapper.find(Typography)).toHaveLength(2);
        expect(wrapper.find(TextField)).toHaveLength(1);
        expect(wrapper.find(ChevronLeftIcon)).toHaveLength(1);
        expect(wrapper.find(ChevronRightIcon)).toHaveLength(1);
    });
})