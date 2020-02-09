import React from 'react'
import { MovieProps } from '../../types/MovieProps'

const Movie: React.FC<MovieProps> = ({ title }) => {
  return <div className="movie">{title}</div>
}

export default Movie
