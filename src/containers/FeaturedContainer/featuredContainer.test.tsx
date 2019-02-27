import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { FeaturedContainer } from './FeatureContainer';
import { GET_TRANDING } from '../../components/Requests/frontPage';

const fakeTranding = [{
    backdrop_path: "/aiM3XxYE2JvW1vJ4AC6cI1RjAoT.jpg",
    genre_ids: {"type":"json","json":["53","28","18"]},
    id: "438650",
    overview: "Водитель снегоочистителя хочет отомстить наркоторговцам, так как думает, что они убили его сына. На основе норвежского фильма 2014 года «Дурацкое дело нехитрое» (Kraftidioten).",
    poster_path: "/cLpwiaZdomm7iDthiqAqPL5lAJt.jpg",
    release_date: "2019-02-07",
    title: "Снегоуборщик",
    vote_average: 5.2,
    vote_count: 130
}]


describe('<FeaturedContainer />', () => {
    it('renders featured movie', async () => {
        const mocks = [
            {
                request: { query: GET_TRANDING, variables: { page: `${1}`, genre: '', sortBy: '', source: false } },
                result: {
                    data: {
                        tranding: fakeTranding
                    }
                }
            }
        ];
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <FeaturedContainer />
            </MockedProvider>  
        );
        await wait(0);
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
});