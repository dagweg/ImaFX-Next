import React from 'react'
import '../styles/login.css'

function Login({ loadSignUpPanel }) {
    return (
        <>
            <div className='flex flex-col justify-center h-screen'>
                <div className='login-panel'>
                    <div aria-hidden='true' className='login-panel-back'></div>
                    <div className='py-10'>
                        <h1 className='font-black text-center text-5xl'>SignIn</h1>
                    </div>
                    <div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <button className='login-button'>Login</button>
                        </div>
                        <div className='text-box-wrapper '>
                            <p className='w-full'>Don't have an account? <button className='sign-up' onClick={loadSignUpPanel}>Sign Up</button></p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login