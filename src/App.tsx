import React from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import flatten from 'flat'
import AppLocale from './languageProvider'
import FilterableMovieList from './components/FilterableMovieList'
import MovieDetail from './components/MovieDetail'
import GlobalStyles from './helpers/globalStyle'
import { MoviesProvider } from './context/movieContext'

const App = () => {
  const currentLocale: string = navigator.language
  const currentAppLocale = AppLocale[currentLocale]

  return (
    <Router>
      <MoviesProvider>
        <IntlProvider
          locale={currentLocale}
          messages={flatten(currentAppLocale.messages)}
        >
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <FilterableMovieList />
            </Route>
            <Route path="/movie/:id">
              <MovieDetail />
            </Route>
          </Switch>
        </IntlProvider>
      </MoviesProvider>
    </Router>
  );
}

export default App
