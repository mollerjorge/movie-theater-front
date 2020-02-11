import React, { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import MovieDBApiService from '../../services/MovieDBApiService'
import { useMoviesDispatch } from '../../context/movieContext'

import Loading from '../Loading'
import MovieList from '../MovieList'
import SearchBar from '../SearchBar'
import StarRating from '../StarRating'
import StyledHeader from '../Header'

import { MovieListResponseType } from '../../types/MovieListResponse'
import { MovieType } from '../../types/Movie'


const FilterableMovieList = () => {
  const [currentRating, setCurrentRating] = useState("")
  const [filteredMovieList, setFilteredMovieList] = useState<MovieType[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [movieList, setMovieList] = useState<MovieType[]>([])
  const [searchBarValue, setSearchBarValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useMoviesDispatch()
  
  const getMovieList = async () => {
    setLoading(true)
    setMovieList([])
    try {
      const getMovieListResponse: MovieListResponseType = await MovieDBApiService.list(
        'discover/movie'
      )
      setMovieList(getMovieListResponse.results)
      dispatch({
        type: 'SET_MOVIES',
        payload: { movies: getMovieListResponse.results }
      });
      setErrorMessage('')
    } catch (error) {
      setErrorMessage(error.message)
    }
    setLoading(false)
  }

  const [debouncedGetMoviesByQuery] = useDebouncedCallback(() => {
    const getMoviesByQuery = async (nameOrKeyword: string) => {
      try {
        const getMoviesByNameOrKeywordResponse = await MovieDBApiService.list(
          'search/movie',
          { query: nameOrKeyword }
        );
        setMovieList(getMoviesByNameOrKeywordResponse.results);
        dispatch({
          type: 'SET_MOVIES',
          payload: { movies: getMoviesByNameOrKeywordResponse.results }
        });
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getMoviesByQuery(searchBarValue);
  }, 500) 

  const onChangeSearchBar = (event: React.FormEvent<HTMLInputElement>): void => {
    // Remove previously selected star filters
    setFilteredMovieList(null)
    setCurrentRating("0")
    setSearchBarValue(event?.currentTarget?.value)
  }

  const setRating = (rating: string) => {
    if (rating !== currentRating) {
      // Only filter if new rating is different from current
      setCurrentRating(rating);
      const toRating = parseInt(rating, 10) * 2;
      const fromRating = toRating - 2;
      setFilteredMovieList(
        movieList.filter(movie => (
          movie.voteAverage >= fromRating && movie.voteAverage < toRating)
        )
      );
    }
  };

  useEffect(() => {
    getMovieList()
  }, [])

  useEffect(() => {
    if (searchBarValue) {
      debouncedGetMoviesByQuery()
    } else {
      getMovieList()
    }
  }, [searchBarValue, debouncedGetMoviesByQuery])
  
  return (
    <div className="filterable-movie-list">
      <StyledHeader>
        <SearchBar
          name="searchBar"
          value={searchBarValue}
          onChange={onChangeSearchBar}
        />
      </StyledHeader>
      <StarRating
        numberOfStars={5}
        currentRating={currentRating}
        onClick={setRating}
      />
      {errorMessage && <b>{errorMessage}</b>}
      {!loading && <MovieList movieList={filteredMovieList || movieList} />}
      {loading && <Loading position="bottom"/>}
    </div>
  );
}

export default FilterableMovieList
