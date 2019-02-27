import React from 'react';
import { Preview, PreviewProp } from './Preview'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeMovieData:PreviewProp = {
    id: '351286',
    title: 'Jurassic World: Fallen Kingdom',
    bg: 'https://image.tmdb.org/t/p/w500/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    genre_ids: ['28', '12', '878'],
    isFavourite: false,
    pg: "16",
    duration: '123',
    description:
      'Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.',
    year: '2018-06-06',
};


describe('<Preview />', () => {
    it('renders preview component', () => {
        const wrapper = shallow(<Preview {...fakeMovieData} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
});
