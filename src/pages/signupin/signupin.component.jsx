import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/signup/signup.component'

import './signupin.styles.scss'

const SignUpIn = () => (
    <div className='signupin'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignUpIn;