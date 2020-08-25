import React from 'react';

import SignIn from '../components/sign-in.component';
import SignUp from '../components/sign-up.component';

import './signin-signup.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='signin-signup-container'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;