import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GamePage from '../pages/gamePage.jsx';

export default function authForm(props) {
  console.log(props);
  return (
    <div className="authForm">
      <input type="text" placeholder="Username"></input>
      <br></br>
      <input type="text" placeholder="Password"></input>
      <br></br>
      <button
        className="authButton"
        onClick={() => {
          props.history.push('/game');
        }}
      >
        AuthButton
      </button>
    </div>
  );
}
