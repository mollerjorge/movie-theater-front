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
        <Logo width="10rem"/>
      </div>
      <div className="mt-navbar__auth-container">
        Auth section
      </div>
    </nav>
  )
}

const StyledNavBar = styled(Navbar)`
  &.mt-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 1rem;
  }
`;

export default StyledNavBar