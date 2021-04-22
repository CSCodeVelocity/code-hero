import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../state/contexts.jsx';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { authState } = authContext;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authState.isOnline) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
