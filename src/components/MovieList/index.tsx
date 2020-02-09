import React from 'react'
import styled from 'styled-components'
import Movie from '../Movie'
import { MovieListType } from '../../types/MovieList'


const MovieList: React.FC<MovieListType> = ({ movieList, className }) => {
  const displayMovieList = movieList?.map(({
    id,
    title,
    posterPath,
    voteAverage
  }) => (
    <Movie
      key={id}
      title={title}
      posterPath={posterPath}
      voteAverage={voteAverage}
    />
  ))
  return (
    <div className={`${className} container`}>
      <div className="mt-movie-list-grid">
        {displayMovieList}
      </div>
  </div>)
}

export default styled(MovieList)`
  .mt-movie-list-grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #fff;
    color: #444;
    padding: 4rem;
    justify-items: center;

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
