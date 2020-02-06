import React from 'react'
import { IntlProvider, useIntl } from 'react-intl'
import flatten from 'flat'
import AppLocale from './languageProvider'

const App = () => {
  const currentLocale = navigator.language
  const currentAppLocale = AppLocale[currentLocale]

  return (
    <IntlProvider
      locale={currentLocale}
      messages={flatten(currentAppLocale.messages)}
    >
      <SearchBar />
    </IntlProvider>
  )
}

const SearchBar = () => {
  const intl = useIntl()
  const searchBarPlaceholder = intl.formatMessage({
    id: 'home.searchBarPlaceholder'
  })

  return <input placeholder={searchBarPlaceholder} />
}

export default App
