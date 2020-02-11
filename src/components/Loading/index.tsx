import React from 'react'
import styled, { css } from 'styled-components'

const Loading = ({ className, position }: { className?: string, position?: string }) => (
  <div className={className}>Loading...</div>
)

export default styled(Loading)`
  font-size: 2.3rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  ${props => props.position === 'bottom' ? css`
    bottom: 5%;
    top: auto;
  ` : ''}
`;
