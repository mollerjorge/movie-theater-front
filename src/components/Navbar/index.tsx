import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/fixus-logo.svg'

type NavbarProps = {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`${className} mt-navbar`}>
      <div className="mt-navbar__logo-container">
        <Logo />
      </div>
    </nav>
  )
}

const StyledNavBar = styled(Navbar)`
  align-items: center;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  padding: 1rem;
  
  .mt-navbar {
    &__logo-container {
      svg {
        width: 10rem;
      }
    }
}
`;

export default StyledNavBar