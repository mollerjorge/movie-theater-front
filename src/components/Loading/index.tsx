import React from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'

const Loading = ({ className }: { className?: string, position?: string }) => (
  <div className={className}>
    <FormattedMessage id="loading" />
  </div>
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
