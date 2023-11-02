import React, { useState } from 'react'
import '../styles/login.css'
import Login from './Login'
import SignUp from './SignUp'


function LoginSignup() {

    const [login, setLogin] = useState(true)

    const loadSignUpPanel = () => {
        setLogin(false)
    }

    const loadLoginPanel = () => {
        setLogin(true)
    }

    return (
        <>
            {login ? <Login loadSignUpPanel={loadSignUpPanel} /> : <SignUp loadLoginPanel={loadLoginPanel} />}
        </>
    )
}

export default LoginSignup