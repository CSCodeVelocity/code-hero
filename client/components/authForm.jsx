import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default function authForm(props) {
  console.log(props);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#pass').value;

    if (!username || !password) return; // Need to add message to user for empty fields

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('RESPONSE: ', res);
        const { username, userId, success } = res;
        // success === false ? do some state stuff and redirect back to login : route/redirect to /game with username and userId (also do some state stuffs)
        if (!success) return;
        else {
          props.history.push('/game');
        }
      });
  };

  const handleSignUp = () => {};

  return (
    <div className="authForm">
      <input id="username" type="text" placeholder="Username"></input>
      <br></br>
      <input id="pass" type="password" placeholder="Password"></input>
      <br></br>
      <button id="logIn" className="authButton" onClick={handleLogin}>
        Log In
      </button>
      <button id="signUp" className="authButton" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}
