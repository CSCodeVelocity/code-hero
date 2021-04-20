import React from 'react';
import { authPage } from './pages/authPage.jsx';
import { gamePage } from './pages/gamePage.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div classname="App">
      <h1>Protected React Router</h1>
    </div>
  );
};

export default App;
