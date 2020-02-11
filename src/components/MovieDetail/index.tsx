import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import MovieDBApiService from '../../services/MovieDBApiService'
import { MovieDetailType } from '../../types/Movie'
// import { useMoviesState } from '../../context/movieContext'

import Loading from '../Loading'
import StyledMovieDetail from './styles'

type Params = {
  id?: string | undefined
}

const MovieDetail = ({ className }: { className?: string }) => {
  // If we want to access our movies from context we can do it by calling context.movies
  // It's a neat way of using global state instead of using redux
  // const context = useMoviesState()
  const params: Params = useParams()
  const history = useHistory()
  const [movie, setMovie] = useState<MovieDetailType | null>(null)
  const [movieCredits, setMovieCredits] = useState<{
    cast: { name: string }[]
  } | null>(null)
  const [loading, setLoading] = useState(true)

  const getMovieById = async () => {
    const getMovieByIdResponse: MovieDetailType = await MovieDBApiService.retrieve(
      'movie',
      params.id
    )
    setMovie(getMovieByIdResponse)
  }

  const getMovieCreditsById = async () => {
    const getMovieCreditsByIdResponse = await MovieDBApiService.list(
      `movie/${params.id}/credits`
    )
    setMovieCredits(getMovieCreditsByIdResponse)
  }

  useEffect(() => {
    getMovieById()
    getMovieCreditsById()
  }, [])

  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])

  const displayMovieGenres = movie?.genres.map(
    (genre: { name: string }, index: number) => {
      return (
        <span>
          {genre.name}{' '}
          {index !== movie?.genres?.length - 1 ? (
            <span className="separator">/</span>
          ) : (
            ''
          )}
        </span>
      )
    }
  )

  const goToDiscoverView = () => {
    history.push('/')
  }

  return (
    <StyledMovieDetail>
      <div className={`${className} movie-detail container`}>
        {!loading && (
          <>
            <button
              type="button"
              onClick={goToDiscoverView}
              className="movie-detail__go-back"
            >
              ← Go Back
            </button>
            <div className="movie-detail__header">
              <div className="movie-detail__title">
                <h1>{movie?.title}</h1>
                <div className="movie-detail__genres">{displayMovieGenres}</div>
              </div>
              <p className="movie-detail__vote-average">
                <span>{movie?.voteAverage.toFixed(1)} </span> / 10
              </p>
            </div>
            <div className="movie-detail__info-box">
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.posterPath}`}
                alt="movie poster"
              />
              <div className="movie-detail__about-box">
                <h3>
                  <FormattedMessage id="aboutTheMovie" />
                </h3>
                <p>{movie?.overview}</p>

                <div className="movie-detail__more-info">
                  <div className="movie-detail__actors">
                    <h3>
                      <FormattedMessage id="actors" />
                    </h3>
                    {movieCredits?.cast.map(actor => (
                      <span>{actor.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {loading && <Loading />}
      </div>
    </StyledMovieDetail>
  )
}

export default MovieDetail
