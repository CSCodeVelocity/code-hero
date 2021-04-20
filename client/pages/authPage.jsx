import React from 'react';
import AuthForm from '../components/authForm.jsx';

export const authPage = (props) => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <AuthForm history={props.history} />
    </div>
  );
};
