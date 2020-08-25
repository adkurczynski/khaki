import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { signOutStart } from '../redux/user/user.actions.js';

import { ReactComponent as Logo } from '../pics/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser, signOutStart }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='link-container'>
            {currentUser ? (
                <Link to='/profile' className='option'>Profile</Link>
            ) : (null)
            }
            <Link className='option'>About</Link>
            {currentUser ? (
                <Link  as ='div' className='option' onClick={signOutStart}>Sign Out</Link>
            ):(
                <Link to='/signin' className='option'>Sign In</Link>
            )}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)