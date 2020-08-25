import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);

    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]:value});
    } 

    return (
        <div className='sign-in-container'>
            <h2>I have an account</h2>
            <span>Sign in with email and password</span>
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <CustomButton type='submit'>SIGN IN</CustomButton>
                <CustomButton type='button' onClick={googleSignInStart}>SIGN IN WITH GOOGLE</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
        dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);