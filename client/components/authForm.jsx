import React, { useReducer } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { authReducer, initialAuthState } from '../state/reducers';

const authForm = (props) => {
  console.log(props);
  /* Accesing authState and authReducer */
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const handleLogin = (e) => {
    e.preventDefault();
    /* Getting user input */
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
          dispatch({
            type: 'LOGGED_IN',
            payload: {
              username: username,
              userId: userId,
              isOnline: true,
            },
          });
          props.history.push('/game');
        }
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    /* Getting user input */
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#pass').value;
    const passCheck = document.querySelector('#passcheck').value;
    /* Makes sure all fields have been inputted as well as checking if both passwords are the same */
    // Need to add message to user for empty fields
    if (!username || !password || !passCheck || password !== passCheck) return;

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
        // success === false ? do some state stuff and redirect back to signup : route/redirect to /game with username and userId (also do some state stuffs)
        if (!success) return;
        else {
          dispatch({
            type: 'LOGGED_IN',
            payload: {
              username: username,
              userId: userId,
              isOnline: true,
            },
          });
          props.history.push('/game');
        }
      });
  };

  /* Changes authState.signUp to opposite value thus rendering a different form due to logic below */
  const handleSwitch = (e) => {
    e.preventDefault;
    let signUp = '';
    if (!authState.signUp) {
      signUp = true;
    } else signUp = false;

    dispatch({
      type: 'SET_SIGNUP',
      payload: {
        signUp,
      },
    });
  };
  // if conditional: if authState.signUp is false return login form below, if authState.signUp is true return signIn form which we can create from the model below
  if (!authState.signUp) {
    return (
      <div className="authForm">
        <input id="username" type="text" placeholder="Username"></input>
        <br></br>
        <input id="pass" type="password" placeholder="Password"></input>
        <br></br>
        <button id="logIn" className="authButton" onClick={handleLogin}>
          Log In
        </button>
        <button id="usercreate" className="authButton" onClick={handleSwitch}>
          Sign Up
        </button>
      </div>
    );
  } else {
    return (
      <div className="authForm">
        <input id="username" type="text" placeholder="Username"></input>
        <br></br>
        <input id="pass" type="password" placeholder="Password"></input>
        <br></br>
        <input
          id="passcheck"
          type="password"
          placeholder="Re-Enter Password"
        ></input>
        <br></br>
        <button id="usercreate" className="authButton" onClick={handleSignUp}>
          Sign Up
        </button>
        <button id="logIn" className="authButton" onClick={handleSwitch}>
          Log In
        </button>
      </div>
    );
  }
};

export default authForm;
