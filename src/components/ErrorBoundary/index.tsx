import React, { ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}
type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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

    if (hasError) return <h1>There was an error when trying to render the components</h1>

    return children
  }
}

export default ErrorBoundary
