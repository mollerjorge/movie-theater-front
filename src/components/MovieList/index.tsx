import React from 'react'
import Movie from '../Movie'
import { MovieListType } from '../../types/MovieList'

const MovieList: React.FC<MovieListType> = ({ movieList }) => {
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
  return <>{displayMovieList}</>
}

export default MovieList
