import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import flatten from 'flat'
import AppLocale from './languageProvider'
import GlobalStyles from './settings/globalStyle'
import { MoviesProvider } from './context/movieContext'
import theme from './settings/theme'

import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'

const FilterableMovieList = lazy(() => import('./components/FilterableMovieList'));
const MovieDetail = lazy(() => import('./components/MovieDetail'));

const App = () => {
  const currentLocale: string = navigator.language
  const currentAppLocale = AppLocale[currentLocale]

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MoviesProvider>
          <IntlProvider
            locale={currentLocale}
            messages={flatten(currentAppLocale.messages)}
          >
            <GlobalStyles />
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route
                    exact
                    path="/"
                  >
                    <FilterableMovieList />
                  </Route>
                  <Route path="/movie/:id">
                    <MovieDetail />
                  </Route>
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </IntlProvider>
        </MoviesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App
