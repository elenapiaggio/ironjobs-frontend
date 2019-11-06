import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import { withAuth } from './Context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import LandingPage from './views/LandingPage';

class App extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <>
          {/* <button onClick={handleLogout}>logout</button>
          <Login/> */}
          <LandingPage />
          <Router>
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/private" component={PrivateView} />
          </Router>
      </>
    );
  }
}

export default withAuth(App);
