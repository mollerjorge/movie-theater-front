import React from 'react'
import { IntlProvider } from 'react-intl'
import flatten from 'flat'
import AppLocale from './languageProvider'
import FilterableMovieList from './components/FilterableMovieList'

const App = () => {
  const currentLocale: string = navigator.language
  const currentAppLocale = AppLocale[currentLocale]

  return (
    <IntlProvider
      locale={currentLocale}
      messages={flatten(currentAppLocale.messages)}
    >
      <FilterableMovieList />
    </IntlProvider>
  )
}

export default App
