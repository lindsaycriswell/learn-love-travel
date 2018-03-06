import { Redirect } from 'react-router'
import React from 'react'

const withAuth = (WrappedComponent) => {
  return props => {
    return props.auth.loggedIn ?
      (<WrappedComponent {...props} />)
        :
      (<Redirect to="/" />)
  }
}

export default withAuth
