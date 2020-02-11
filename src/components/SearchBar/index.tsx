import React from 'react';
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

type SearchBarProps = {
  name: string
  value: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  className?: string
};

const isSearchValueEqual = (
  prevProps: SearchBarProps,
  nextProps: SearchBarProps
) => prevProps.value === nextProps.value

const SearchBar: React.FC<SearchBarProps> = React.memo((
  {
    name,
    value,
    onChange,
    className
  }) => {
  const intl = useIntl()
  return (
    <div className={`${className} mt-searchbar`}>
      <SearchIcon className="mt-searchbar__search-icon" />
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="mt-searchbar__input"
        placeholder={intl.formatMessage({ id: 'searchBarPlaceholder' })}
      />
    </div>
  )
}, isSearchValueEqual)


export default styled(SearchBar)`
  margin-top: 2.5rem;
  position: relative;
  .mt-searchbar {
    &__input {
      border-radius: 10rem;
      border: 1px solid #c3c3c3;
      font-size: 1.8rem;
      height: 4rem;
      text-indent: 4.5rem;
      width: 40rem;

      &::placeholder {
        font-style: italic;
      }
    }

    &__search-icon {
      left: 1.3rem;
      position: absolute;
      top: 1.3rem;
      width: 2rem;
    }
  }
`;
