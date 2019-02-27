import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MoviePlayer, MoviePlayerProps } from './MoviePlayer';

const fakePlayerData:MoviePlayerProps = {
    link: 'safdfsdlm',
    image: 'sdfdsffsg',
    playing: false,
    onPlay: jest.fn()
};

describe('<MoviePlayer />', () => {
    it('renders player component', () => {
        const wrapper = shallow(<MoviePlayer {...fakePlayerData} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
}); 
