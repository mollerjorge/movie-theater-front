import React from 'react'
import SearchBar from '../SearchBar'
import MovieList from '../MovieList'

const FilterableMovieList = () => {
  return (
    <div className="filterable-movie-list">
      <SearchBar
        name="searchBar"
        value="dummy value"
        onChange={() => { }} />
      <MovieList movieList={[]} />
    </div>
  )
}

export default FilterableMovieList
