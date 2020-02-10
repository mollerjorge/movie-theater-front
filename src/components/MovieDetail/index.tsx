import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMoviesState } from '../../context/movieContext'

const MovieDetail = () => {
  const params = useParams()
  const context = useMoviesState()

  useEffect(() => {
    if (context.selectedMovie) {

    }
  }, [])
  return (
    <div>
      Hello from movie detail
    </div>
  )
}

export default MovieDetail
