import React from 'react';
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

import './index.scss';

type SearchBarProps = {
  name: string
  value: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  className?: string
};

const SearchBar: React.FC<SearchBarProps> = ({ name, value, onChange, className }) => {
  const intl = useIntl();
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
  );
};


export default styled(SearchBar)`
  position: relative;
  margin-top: 2.5rem;
  .mt-searchbar {
    &__input {
      width: 40rem;
      height: 4rem;
      border-radius: 10rem;
      border: 1px solid #c3c3c3;
      text-indent: 4.5rem;
      font-size: 1.8rem;

      &::placeholder {
        font-style: italic;
      }
    }

    &__search-icon {
      width: 2rem;
      position: absolute;
      left: 1.3rem;
      top: 1.3rem;
    }
  }
`;
