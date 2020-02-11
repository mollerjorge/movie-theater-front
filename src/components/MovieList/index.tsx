import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Movie from '../Movie'

import { MovieListType } from '../../types/MovieList'

const isMovieListEqual = (
  prevProps: MovieListType,
  nextProps: MovieListType
) => (prevProps.movieList === nextProps.movieList)

const MovieList: React.FC<MovieListType> = React.memo(({ movieList, className }) => {
  const displayMovieList = movieList?.map((movie) => (
      <Movie movie={movie} />
  ))
  return (
    <div className={`${className} container`}>
      <div className="mt-movie-list-grid">
        {displayMovieList.length > 0 ? (
          displayMovieList
        ) : (
          <h2>
            <FormattedMessage id="noResults" />
          </h2>
        )}
      </div>
    </div>
  );
}, isMovieListEqual)

export default styled(MovieList)`
  .mt-movie-list-grid {
    background-color: ${props => props.theme.white};
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    padding: 4rem;

    h2 {
      font-size: 2rem;
      grid-column: 3/5;
    }

    .movie {
      img {
        width: 100%;
        max-height: 275px;
      }
    }

    .movie:nth-child(1) {
      grid-row: 1 / 3;
      grid-column: 1 / 3;

      img {
        width: 100%;
        max-height: 100%;
      }
    }
  }
`;
