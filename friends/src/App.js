import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  

  const logout = () => {
    
  }

  return (
    <Router>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to={logout}>Logout</Link>
        <Link to='/friends-list'>Friends</Link>
      </nav>
      <Switch>
        <PrivateRoute path='/friends-list' component={FriendsList}/>   
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
