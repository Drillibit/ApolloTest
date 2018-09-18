import React, { PureComponent } from 'react';
import styled from 'styled-components';

import {
  func,
  shape,
  string,
  number,
  array,
  arrayOf,
  object,
  objectOf,
  bool
} from 'prop-types';

import { colors } from './helpers/colors';
import { H1, H2, SmallText, LargeText } from './UIKit/Typography';
import { StyledGrid, StyledRow, StyledCol } from './helpers/grid';
import { MoviePlayer } from './MoviePlayer';
import { Button } from './UIKit/Button';
import { Icon } from './UIKit/Icon';
import { Rating } from './UIKit/Rating';
import { Quote } from './UIKit/Quote';
import { Preloader } from '../components/UIKit/Preloader';
import { Preview } from '../components/UIKit/Preview';
import { FavouriteButton } from './FavouriteButton';

const StyledCustomRow = styled(StyledRow)`
  margin-bottom: 50px;
`;

const StyledSimilar = styled.div`
  display: flex;
  margin: 5px 0 80px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledBottom = styled.div`
  display: flex;
  margin: 25px;
`;

const StyledLargeText = LargeText.extend`
  color: ${colors.grey200};
`;

const StyledSmallInfo = LargeText.extend`
  color: ${colors.grey500};
  margin-right: 10px;
`;

const StyledDetails = styled.div`
  display: flex;
  margin: 7px 0;
  align-items: baseline;
`;

const StyledDetailsHeader = styled.span`
  min-width: 90px;
`;

const StyledPlayerWrapper = styled.div`
  display: flex;
  height: 296px;
`;

const StyledHeadersGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 24px;
`;

const StyledLeftGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledLink = styled.span`
  margin-right: 40px;
`;
const StyledBtnGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 117px 0 40px;
`;

const StyledQuoteContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  margin-left: 48px;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  margin-left: 43px;
`;

const StyledRightGroup = styled.div`
  height: 638px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RatingStyled = styled(Rating)`
  position: relative;
  display: inline-flex;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.2);
  margin-left: 48px;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(73, 76, 98, 0.2);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
    padding: 10px;
    border-radius: 5px;
  }
`;

const StyledPreloader = styled.div`
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledBgKeeper = styled.div`
  min-height: 638px;
  width: 100%;
  background-image: 
        linear-gradient(325deg, transparent, #130621 120%), 
        linear-gradient(206deg, transparent, #130621 81%),
    url('${({ bg }) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: 100% 100%,100% 100% , cover;
  background-repeat: no-repeat;
  padding-bottom: 40px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export class MoviePage extends PureComponent {
  static propTypes = {
    video: string,
    similar: arrayOf(object),
    toggleFavourite: func,
    favourite: bool,
    favourites: objectOf(bool),
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
  };

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
    },
    favourite: false,
    favourites: {},
    video: '/',
    similar: [],
    toggleFavourite: f => f
  };

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.id !== state.path) {
      return { playing: false, path: props.match.params.id };
    }

    return null;
  }

  state = {
    playing: false
  }
  onPlay = () => {
    this.setState({
      playing: true
    });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {
      poster_path,
      backdrop_path,
      genres,
      id,
      title,
      original_title,
      release_date,
      vote_average,
      vote_count,
      tagline,
      production_countries,
      runtime,
      overview,
      similar,
    } = this.props;

    const {
      toggleFavourite,
      favourite,
      favourites
    } = this.props;

    if (typeof this.props.movie.id !== 'number') {
      return (
        <StyledPreloader>
          <Preloader>Загрузка</Preloader>
        </StyledPreloader>
      );
    }
    return (
      <StyledContainer>
        <StyledBgKeeper bg={backdrop_path}>
          <StyledGrid>
            <StyledRow>
              <StyledCol xs={12} md={6}>
                <StyledLeftGroup>
                  <StyledBtnGroup>
                    <StyledLink>
                      <Button btnType="transparent-white" btnSize="small" onClick={this.goBack}>
                        <Icon icon="chevron-left" />
                        Назад
                      </Button>
                    </StyledLink>
                    <FavouriteButton
                      btnType="transparent-white"
                      toggleFavourite={() => toggleFavourite(id)}
                      isFavourite={favourite}
                    />
                  </StyledBtnGroup>
                  <StyledHeadersGroup>
                    <H1>{title}</H1>
                    <SmallText>{original_title}</SmallText>
                  </StyledHeadersGroup>
                  <StyledPlayerWrapper>
                    <MoviePlayer
                      link={this.props.video.key}
                      image={poster_path}
                      playing={this.state.playing}
                      onPlay={this.onPlay}
                    />
                  </StyledPlayerWrapper>
                </StyledLeftGroup>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledRightGroup>
                  {tagline && (
                    <StyledQuoteContainer>
                      <Quote>
                        <H2>{tagline.charAt(0) === '«' ? tagline.slice(1, -1) : tagline}</H2>
                      </Quote>
                    </StyledQuoteContainer>
                  )}
                  <StyledRatingWrapper>
                    <RatingStyled
                      voteAverage={vote_average}
                      voteCount={vote_count}
                      size="lg"
                    />
                  </StyledRatingWrapper>
                </StyledRightGroup>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBgKeeper>
        <StyledBottom>
          <StyledGrid>
            <StyledCustomRow>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Год:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{release_date.split('-')[0]}</StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Страна:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>
                    {production_countries.map((gen, index) => `${gen.name}${production_countries.length - 1 !== index ? ', ' : ''}`)}
                  </StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Жанр:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{genres.map((gen, index) => `${gen.name}${genres.length - 1 !== index ? ', ' : ''}`)}</StyledSmallInfo>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Время:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{runtime} мин</StyledSmallInfo>
                </StyledDetails>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <StyledLargeText>Описание:</StyledLargeText>
                  </StyledDetailsHeader>
                  <StyledSmallInfo>{overview}</StyledSmallInfo>
                </StyledDetails>
              </StyledCol>
            </StyledCustomRow>
            <StyledRow>
              <StyledCol md={12}>
                <StyledDetailsHeader>
                  <StyledLargeText>Похожие</StyledLargeText>
                </StyledDetailsHeader>
                <StyledSimilar>
                  {similar.length > 1 ? (
                    similar.map((movie) => {
                     const fav = false;
                     return (
                       <Preview
                         key={movie.id}
                         toggleFavourite={() => toggleFavourite(movie.id)}
                         isFavourite={fav}
                         id={movie.id}
                         description={movie.overview}
                         title={movie.title}
                         bg={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                         voteAverage={movie.vote_average}
                         voteCount={movie.vote_count}
                         year={movie.release_date}
                         duration={movie.runtime}
                       />);
                    })

                  ) : (
                    <StyledPreloader>
                      <Preloader>Загрузка</Preloader>
                    </StyledPreloader>
                  )}
                </StyledSimilar>
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBottom>
      </StyledContainer>
    );
  }
}
