import React from 'react'
import { MovieProps } from '../../types/MovieProps'

const Movie: React.FC<MovieProps> = ({ title, posterPath }) => {
  if (posterPath) {
    return <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={`${title} poster`}
      />
    </div>
  } 
  return <></>
}

export default Movie
