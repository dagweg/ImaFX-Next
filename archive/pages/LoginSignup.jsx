import React, { useState } from 'react'
import '../styles/login.css'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import { Outlet } from 'react-router-dom'


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
            {/* {login ? <Login loadSignUpPanel={loadSignUpPanel} /> : <SignUp loadLoginPanel={loadLoginPanel} />} */}
            {<Outlet /> === <Login /> ? <Login loadSignUpPanel={loadSignUpPanel} /> : <SignUp loadLoginPanel={loadLoginPanel} />}
        </>
    )
}

export default LoginSignup