import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Users from './Users';

function App() {
  return (
    <div className="App App-header">
      <Route exact path="/" render={routeProps => <SignUp {...routeProps} />} />
      <Route exact path="/login" render={routeProps => <SignIn {...routeProps} />} />
      <Route exact path="/users" render={routeProps => <Users {...routeProps} />} />
    </div>
  );
}

export default App;
