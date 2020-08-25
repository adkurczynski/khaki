import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage.component';
import Header from './components/header.component';
import SignInAndSignUpPage from './pages/signin-signup.component.jsx'
import ProfilePage from './pages/profile.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path ='/profile' 
            render={() =>
            !currentUser ? <Redirect to='/' /> : <ProfilePage />
          } />
        <Route exact path='/signin' 
            render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          } />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
