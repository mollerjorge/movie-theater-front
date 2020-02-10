import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useMoviesState } from '../../context/movieContext'
import MovieDBApiService from '../../services/MovieDBApiService'
import { MovieDetailType } from '../../types/Movie'

type Params = {
  id?: string | undefined
}

const MovieDetail = ({ className }: { className?: string }) => {
  const params: Params = useParams()
  const history = useHistory()
  // const context = useMoviesState()
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [movieCredits, setMovieCredits] = useState<{ cast: {name: string}[]} | null>(null);

  const getMovieById = async () => {
    try {
      const getMovieByIdResponse: MovieDetailType = await MovieDBApiService.retrieve('movie', params.id)
      setMovie(getMovieByIdResponse);
    } catch (error) {
      // console.log(error)
    }
  }

  const getMovieCreditsById = async () => {
    try {
      const getMovieCreditsByIdResponse = await MovieDBApiService.list(`movie/${params.id}/credits`)
      setMovieCredits(getMovieCreditsByIdResponse);
      console.log(getMovieCreditsByIdResponse);
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    getMovieById()
    getMovieCreditsById()
  }, [])

  const displayMovies = movie?.genres.map((genre: { name: string }, index: number) => {
    return <span>{genre.name} {index !== movie?.genres?.length - 1 ? <span className="separator">/</span> : ''}</span>
  })

  const goToDiscoverView = () => {
    history.push('/')
  }

  return (
    <div className={`${className} movie-detail container`}>
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
          <div className="movie-detail__genres">{displayMovies}</div>
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
          <h3>About the movie</h3>
          <p>{movie?.overview}</p>

          <div className="movie-detail__more-info">
            <div className="movie-detail__actors">
              <h3>Actors</h3>
              {movieCredits?.cast.map(actor => (
                <span>{actor.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(MovieDetail)`
  padding: 3rem 10rem;
  .movie-detail {
    &__go-back {
      padding: 1rem 2rem;
      border: 1px solid #1c2940;
      border-radius: 10rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      span {
        font-size: 1.6rem;
        font-weight: bold;
        color: #007aff;
      }
    }
    &__genres {
      .separator {
        margin: 0 1rem;
      }
    }

    &__info-box {
      img {
        max-width: 30rem;
      }
    }

    &__vote-average {
      font-size: 2.2rem;
      color: #cfcfcf;
      width: 20rem;
      span {
        color: #007aff;
        font-weight: bold;
      }
    }

    &__info-box {
      display: flex;
    }

    &__about-box {
      margin-left: 5rem;
      h3 {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
      }
      p {
        font-size: 2rem;
        max-width: 80%;
        line-height: 3rem;
        color: #1c2940;
      }
    }
    &__more-info {
      margin-top: 6rem;
    }
    &__actors {
      display: flex;
      flex-direction: column;
      max-height: 160px;
      overflow: hidden;
      span {
        font-size: 1.6rem;
        color: #007aff;
        margin-bottom: 1rem;
        font-weight: 700;
      }
    }
  }
`;
