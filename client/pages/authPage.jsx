import React from 'react';
import AuthForm from '../components/authForm.jsx';

const authPage = (props) => {
  return (
    <div className="authpage">
      <h1>Code Hero</h1>
      <AuthForm history={props.history} />
    </div>
  );
};
export default authPage;
