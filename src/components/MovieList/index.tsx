import React from 'react'
import Movie from '../Movie'
import { MovieListType } from '../../types/MovieList'

const MovieList: React.FC<MovieListType> = ({ movieList }) => {
  const displayMovieList = movieList.map(({ name, cover, voteAverage }) => (
    <Movie
      name={name}
      cover={cover}
      voteAverage={voteAverage}
    />
  ))
  return <>{displayMovieList}</>
}

export default MovieList
