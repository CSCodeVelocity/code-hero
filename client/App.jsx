import React from 'react';
import AuthPage from './pages/authPage.jsx';
import GamePage from './pages/gamePage.jsx';
import { Route } from 'react-router-dom';

const App = () => {
  
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Route exact path="/" component={AuthPage} />
      <Route path="/game" component={GamePage} />
    </div>
  );
};

export default App;
