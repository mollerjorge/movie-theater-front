import React, { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import MovieDBApiService from '../../services/MovieDBApiService'
import SearchBar from '../SearchBar'
import MovieList from '../MovieList'
import { MovieType } from '../../types/Movie'
import { MovieListResponseType } from '../../types/MovieListResponse'

const FilterableMovieList = () => {
  const [searchBarValue, setSearchBarValue] = useState('')
  const [movieList, setMovieList] = useState<MovieType[]>([])

  const getMovieList = async () => {
    try {
      const getMovieListResponse: MovieListResponseType = await MovieDBApiService.list(
        'discover/movie'
      )
      setMovieList(getMovieListResponse.results)      
    } catch (error) {
      // console.log(error.message)
    }
  }

  const [debouncedGetMoviesByQuery] = useDebouncedCallback(() => {
    const getMoviesByQuery = async (nameOrKeyword: string) => {
      try {
        const getMoviesByNameOrKeywordResponse = await MovieDBApiService.list(
          'search/movie',
          { query: nameOrKeyword }
        );
        setMovieList(getMoviesByNameOrKeywordResponse.results);
      } catch (error) {
        // console.log(error);
      }
    };
    getMoviesByQuery(searchBarValue);
  }, 500) 

  const onChangeSearchBar =(event: React.FormEvent<HTMLInputElement>): void => {
    setSearchBarValue(event?.currentTarget?.value)
  }

  useEffect(() => {
    getMovieList()
  }, [])

  useEffect(() => {
    debouncedGetMoviesByQuery();
  }, [searchBarValue, debouncedGetMoviesByQuery])

  return (
    <div className="filterable-movie-list">
      <SearchBar
        name="searchBar"
        value={searchBarValue}
        onChange={onChangeSearchBar}
      />
      <MovieList movieList={movieList} />
    </div>
  )
}

export default FilterableMovieList
