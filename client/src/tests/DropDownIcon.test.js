import React from 'react';
import { render } from '@testing-library/react';
import DropDownIcon from '../components/common/DropDownIcon';

describe('<DropDownIcon/>', () =>{
    it('matches snapshot', () =>{
        const utils = render(<DropDownIcon/>);
        expect(utils.container).toMatchSnapshot();
    });
})