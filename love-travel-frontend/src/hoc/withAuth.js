import { Redirect } from "react-router";
import React from "react";

const withAuth = WrappedComponent => {
  return props => {
    // console.log(props.auth)
    return props.auth.loggingIn || props.auth.loggedIn ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to="/" />
    );
  };
};

export default withAuth;
