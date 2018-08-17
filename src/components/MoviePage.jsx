import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { func, shape, string, number, array } from 'prop-types';

import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { StyledButton } from './UIKit/Button';
import { Rating } from './UIKit/Rating';
import { Quote } from './UIKit/Quote';
import { Preloader } from '../components/UIKit/Preloader';

const StyledBgKeeper = styled.div`
  min-height: 638px;
  width: 100%;
  background-image: url('${({ bg }) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: cover;
`;

const StyledContainer = styled.div`
  min-height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;

export class MoviePage extends Component {
  static propTypes = {
    searchById: func.isRequired,
    movie: shape({
      poster_path: string,
      genres: array,
      id: number,
      title: string,
      release_date: string,
      tagline: string,
      vote_average: number,
      vote_count: number
    })
  }

  static defaultProps = {
    movie: {
      poster_path: '/',
      genres: [],
      id: 0,
      title: '',
      release_date: '',
      vote_average: 0,
      vote_count: 0
    }
  }
  componentDidMount() {
    const { searchById } = this.props;
    searchById(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { searchById } = this.props;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      searchById(this.props.match.params.id);
    }
  }

  render() {
    const {
      poster_path, 
      genres, 
      id, 
      title, 
      release_date, 
      vote_average, 
      vote_count,
      tagline 
    } = this.props.movie;

    if (typeof this.props.movie.id !== 'number') {
      return <Preloader />;
    }

    return (
      <StyledContainer>
        <StyledBgKeeper bg={poster_path}>
          <StyledGrid>
            <StyledRow>
              <StyledCol xs={12} md={6}>
                <p>Empty</p>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <Quote>
                  {tagline}
                </Quote>
                <Rating voteAverage={vote_average} voteCount={vote_count} size="lg" />
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBgKeeper>
      </StyledContainer>
    );
  }
}
