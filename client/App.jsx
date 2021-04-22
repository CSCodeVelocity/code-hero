import React, { useReducer } from 'react';
import AuthPage from './pages/authPage.jsx';
import GamePage from './pages/gamePage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import { AuthContext } from './state/contexts.jsx';
import { initialAuthState, authReducer } from './state/reducers';

const App = () => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <div className="App">
      {/* <h1>Protected React Router</h1> */}
      <Router>
        <AuthContext.Provider
          value={{ authState: authState, authDispatch: authDispatch }}
        >
          <Route exact path="/" component={AuthPage} />
          <ProtectedRoute path="/game" component={GamePage} />
        </AuthContext.Provider>
      </Router>
    </div>
  );
};

export default App;
