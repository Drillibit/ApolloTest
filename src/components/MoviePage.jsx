import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  func,
  shape,
  string,
  number,
  array,
  arrayOf,
  object
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

const StyledBottom = styled.div`
  display: flex;
  margin: 25px;
`;
const StyledSmallInfo = styled.span`
  color: ${colors.grey200};
  margin-right: 10px;
`;

const StyledDetails = styled.div`
  display: flex;
  margin: 7px 0;
  align-items: baseline;
`;

const StyledDetailsText = SmallText.extend`
  color: ${colors.grey500};
`;

const StyledDetailsHeader = StyledSmallInfo.extend`
  min-width: 90px;
`;

const StyledPlayerWrapper = styled.div`
  display: flex;
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
  justify-content: center;
`;

const StyledLink = styled(Link)`
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
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-left: 43px;
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
  background-image: 
        linear-gradient(325deg, transparent, #130621 81%), 
        linear-gradient(206deg, transparent, #130621 81%),
    url('${({ bg }) => `https://image.tmdb.org/t/p/original${bg}`}');
  background-size: 100% 100%,100% 100% , cover;
  background-repeat: no-repeat;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export class MoviePage extends Component {
  static propTypes = {
    searchById: func.isRequired,
    video: string,
    similar: arrayOf(object),
    movie: shape({
      poster_path: string,
      genres: array,
      id: number,
      title: string,
      release_date: string,
      tagline: string,
      vote_average: number,
      vote_count: number,
      original_title: string
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
    video: '/',
    similar: []
  };
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
      overview
    } = this.props.movie;

    const { similar } = this.props;

    if (typeof this.props.movie.id !== 'number') {
      return <Preloader>Загрузка</Preloader>;
    }

    return (
      <StyledContainer>
        <StyledBgKeeper bg={backdrop_path}>
          <StyledGrid>
            <StyledRow>
              <StyledCol xs={12} md={6}>
                <StyledLeftGroup>
                  <StyledBtnGroup>
                    <StyledLink to="/">
                      <Button btnType="transparent-white" btnSize="small">
                        <Icon icon="chevron-left" />
                        Назад
                      </Button>
                    </StyledLink>
                    <Button btnType="transparent-white" btnSize="small">
                      <Icon icon="heart" />В избранное
                    </Button>
                  </StyledBtnGroup>
                  <StyledHeadersGroup>
                    <H1>{title}</H1>
                    <SmallText>{original_title}</SmallText>
                  </StyledHeadersGroup>
                  <StyledPlayerWrapper>
                    <MoviePlayer link={this.props.video} image={poster_path} />
                  </StyledPlayerWrapper>
                </StyledLeftGroup>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledRightGroup>
                  <StyledQuoteContainer>
                    {tagline && (
                      <Quote>
                        <H2>{tagline}</H2>
                      </Quote>
                    )}
                  </StyledQuoteContainer>
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
            <StyledRow>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <LargeText>Страна:</LargeText>
                  </StyledDetailsHeader>
                  <StyledDetailsText>
                    <LargeText>
                      {production_countries.map(gen => gen.name)}
                    </LargeText>
                  </StyledDetailsText>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <LargeText>Жанр:</LargeText>
                  </StyledDetailsHeader>
                  <StyledDetailsText>
                    <LargeText>{genres.map(gen => gen.name)}</LargeText>
                  </StyledDetailsText>
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <LargeText>Время:</LargeText>
                  </StyledDetailsHeader>
                  <StyledDetailsText>
                    <LargeText>{runtime} мин</LargeText>
                  </StyledDetailsText>
                </StyledDetails>
              </StyledCol>
              <StyledCol xs={12} md={6}>
                <StyledDetails>
                  <StyledDetailsHeader>
                    <LargeText>Описание:</LargeText>
                  </StyledDetailsHeader>
                  <StyledDetailsText>
                    <LargeText>{overview}</LargeText>
                  </StyledDetailsText>
                </StyledDetails>
              </StyledCol>
            </StyledRow>
            <StyledRow>
              <StyledCol md={12}>
                {similar.length > 0 &&
                  similar.map(movie => <Preview key={movie.id} {...movie} />)}
              </StyledCol>
            </StyledRow>
          </StyledGrid>
        </StyledBottom>
      </StyledContainer>
    );
  }
}
