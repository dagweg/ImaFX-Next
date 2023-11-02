import React from 'react'
import '../styles/signup.css'

function SignUp({ loadLoginPanel }) {
    return (
        <>
            <div className='flex flex-col justify-center h-screen'>
                <div className='signup-panel'>
                    <div aria-hidden='true' className='signup-panel-back'></div>
                    <div className='py-10'>
                        <h1 className='font-black text-center text-5xl'>SignUp</h1>
                    </div>
                    <div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Username</label>
                            <input type="text" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" name="" id="" className='text-box' />
                        </div>
                        <div className='text-box-wrapper'>
                            <button className='login-button'>Create Account</button>
                        </div>
                        <div className='text-box-wrapper '>
                            <p className='w-full'>Already have an account? <button className='login' onClick={loadLoginPanel}>Sign In</button></p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp