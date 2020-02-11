import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl'

type ErrorBoundaryProps = {
  children: ReactNode
}
type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError)
      return (
        <h1>
          <FormattedMessage id="errorBoundaryMessage" />
        </h1>
      )

    return children
  }
}

export default ErrorBoundary
