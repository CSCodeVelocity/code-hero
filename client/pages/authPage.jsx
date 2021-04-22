import React from 'react';
import AuthForm from '../components/authForm.jsx';

const authPage = (props) => {
  return (
    <div className="authpage">
      <AuthForm history={props.history} />
    </div>
  );
};
export default authPage;
