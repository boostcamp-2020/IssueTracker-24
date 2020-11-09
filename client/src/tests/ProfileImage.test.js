import React from 'react';
import { render } from '@testing-library/react';
import ProfileImage from '../components/common/ProfileImage';

describe('<ProfileImage/>', () =>{
    const imageSrc = 'jinhyun.png';
    const size='300px';
    it('matches snapshot', () =>{
        const utils = render(<ProfileImage image={imageSrc} size={size} />);
        expect(utils.container).toMatchSnapshot();
    });
})