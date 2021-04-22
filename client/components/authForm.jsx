import React, { useContext } from 'react';
import { AuthContext } from '../state/contexts.jsx';
import { Redirect } from 'react-router-dom';

const authForm = (props) => {
  /* Accessing authState with useContext hook to update authState in handle functions below */
  const authContext = useContext(AuthContext);
  const { authDispatch, authState } = authContext;

  /* Function for clicking Login button */
  const handleLogin = (e) => {
    e.preventDefault();
    /* Getting user input */
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#pass').value;

    if (!username || !password)
      return alert('Username and password required...'); // Need to add message to user for empty fields
    /* Send user inputted credentials to server to be checked against database */
    fetch('/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const { username, userId, success } = res;
        // Should add message to notify user their login attempt has failed
        if (!success) return;
        else {
          /* Login attempt successful: Update state and go to /game (GamePage) */
          const isOnline = true;
          authDispatch({
            type: 'LOGGED_IN',
            payload: {
              username: username,
              userId: userId,
              isOnline,
            },
          });
          props.history.push('/game');
        }
      });
  };
  /* Function for clicking Sign Up button */
  const handleSignUp = (e) => {
    e.preventDefault();
    /* Getting user input */
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#pass').value;
    const passCheck = document.querySelector('#passcheck').value;
    /* Makes sure all fields have been inputted as well as checking if both passwords are the same */
    // Need to add message to user for empty fields
    if (!username || !password || !passCheck) return alert('Form Incomplete');
    else if (password !== passCheck) return alert('Passwords do not match...');
    fetch('/users/signup', {
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
          authDispatch({
            type: 'SIGNED_UP',
            payload: {
              username: username,
              userId: userId,
              isOnline: true,
              signUp: false,
            },
          });
          //props.history.push('/game');
        }
      })
      .catch((err) => console.log(err));
  };

  /* Changes authState.signUp to opposite value thus rendering a different form due to logic below */
  const handleSwitch = (e) => {
    e.preventDefault;
    let signUp = '';
    document.querySelector('#username').value = '';
    document.querySelector('#pass').value = '';
    if (!authState.signUp) {
      signUp = true;
    } else signUp = false;
    authDispatch({
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
