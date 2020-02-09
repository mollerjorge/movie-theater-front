import React from 'react'
import styled from 'styled-components'
import HeaderBackground from '../../assets/pulp-fiction-bg.png'
import StyledNavBar from '../Navbar'

type Header = {
  className?: string
}

const Header: React.FC<Header> = ({ className, children }) => {
  return (
    <header className={`${className} mt-header`}>
      <div className="container">
        <StyledNavBar />

        <div className="mt-header__search-bar-container">
          <h1>Your favourites movies. Explained</h1>
          <h2>Figured out what happened. Then find out why.</h2>
          {children}</div>
      </div>
    </header>
  );
}

const StyledHeader = styled(Header)`
    background-image: url("${HeaderBackground}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;

    .mt-header {
      &__search-bar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80rem;
        margin: auto;
        margin-top: 4rem;

        h1 {
          font-size: 4.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: .5rem;
        }
        h2 {
          font-size: 3.5rem;
          font-weight: 500;
          color: #C2D1C9;
          margin-top: .5rem;
        }
      }

    }

`;

export default StyledHeader
