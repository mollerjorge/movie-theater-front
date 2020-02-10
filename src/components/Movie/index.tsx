import React from 'react'
import { useHistory } from 'react-router-dom'
import { MovieProps } from '../../types/MovieProps'
import { useMoviesDispatch } from '../../context/movieContext'

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const dispatch = useMoviesDispatch()
  const history = useHistory()

  const onMovieClick = () => {
    history.push(`/movie/${movie.id}`)
    dispatch({ type: 'SET_SELECTED_MOVIE', payload: { selectedMovie: movie } });
  }

  if (movie.posterPath) {
    return (
      <div className="movie">
        <button
          type="button"
          onClick={onMovieClick}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
            alt={`${movie.title} poster`}
          />
        </button>
      </div>
    )
  } 
  return <></>
}

export default Movie
