import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { func, shape, string, number, array } from 'prop-types';

import { H1, H2, SmallText } from './UIKit/Typography';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { Button } from './UIKit/Button';
import { Icon } from './UIKit/Icon';
import { Rating } from './UIKit/Rating';
import { Quote } from './UIKit/Quote';
import { Preloader } from '../components/UIKit/Preloader';

const StyledPlayerWrapper = styled.div`
  display: flex;
`;
const StyledHeadersGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;
const StyledLeftGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 200px;
`;

const StyledQuoteContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const StyledRightGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RatingStyled = styled(Rating)`
  display: inline-flex;
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(73, 76, 98, 0.2);
`;

const StyledBgKeeper = styled.div`
  min-height: 638px;
  width: 100%;
  background-image: url('${({ bg }) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: cover;
`;

const StyledContainer = styled.div`
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
      vote_count: number,
      original_title: string,
    })
  }

  static defaultProps = {
    movie: {
      poster_path: '/',
      genres: [],
      id: 0,
      title: '',
      original_title: '',
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
      original_title,
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
                <StyledLeftGroup>
                  <StyledBtnGroup>
                    <Button
                      btnType="transparent-white"
                      btnSize="small"
                    // onClick={}
                    >
                      <Icon icon="chevron-left" />Назад
                    </Button>
                    <Button
                      btnType="transparent-white"
                      btnSize="small"
                      // onClick={action('click')}
                    >
                      <Icon icon="heart" />В избранное
                    </Button>
                  </StyledBtnGroup>
                  <StyledHeadersGroup>
                    <H1>{title}</H1>
                    <SmallText>{original_title}</SmallText>
                  </StyledHeadersGroup>
                  <StyledPlayerWrapper>
                    <MoviePlayer />
                  </StyledPlayerWrapper>
                </StyledLeftGroup>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledRightGroup>
                  <StyledQuoteContainer>
                    <Quote>
                      <H2>{tagline}</H2>
                    </Quote>
                  </StyledQuoteContainer>
                  <StyledRatingWrapper>
                    <RatingStyled voteAverage={vote_average} voteCount={vote_count} size="lg" />
                  </StyledRatingWrapper>
                </StyledRightGroup>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBgKeeper>
      </StyledContainer>
    );
  }
}
