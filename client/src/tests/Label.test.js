import React from 'react';
import { render } from '@testing-library/react';
import LabelOption from '../components/issue/new/sidebar/LabelOption';
import Label from '../components/common/Label';
import SmallLabel from '../components/common/SmallLabel';

describe('<LabelOption/>', () => {
    const data={
      color:'#ffffff',
      title:'bug',
      description:'버그 라벨'
    }
    it('matches snapshot', () => {
      const utils = render(<LabelOption data={data}/>);
      expect(utils.container).toMatchSnapshot();
    });
});


describe('<Label/>', () => {
    const label={
      id:'4',
      color:'#ffffff',
      title:'bug',
    }
    it('matches snapshot', () => {
      const utils = render(<Label label={label}/>);
      expect(utils.container).toMatchSnapshot();
    });
});

describe('<SmallLabel/>', () =>{
    const color="#ffffff";
    it('matches snapshot', () => {
      const utils = render(<SmallLabel color={color}/>);
      expect(utils.container).toMatchSnapshot();
    });
});