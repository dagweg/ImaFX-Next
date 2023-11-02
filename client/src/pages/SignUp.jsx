import React from 'react'
import '../styles/signup.css'

function SignUp({ loadLoginPanel }) {
    return (
        <>
            <div className='panel-wrapper'>
                <div className='panel'>
                    <div className='decorator'></div>
                    <div className='panel-internal'>
                        <iframe src="https://lottie.host/?file=23fc05a6-1216-4bac-a2fe-d326b9557661/rZEVtkxEoa.json" title='wave'></iframe>
                        <div aria-hidden='true' className='login-panel-back'></div>
                        <div className='main-container'>
                            <div className='py-10'>
                                <h1 className='font-black text-center text-5xl'>Sign Up</h1>
                            </div>
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
                                <button className='signup-button'>Create Account</button>
                            </div>
                            <div className='text-box-wrapper '>
                                <p className='w-full'>Already have an account? <button className='sign-up' onClick={loadLoginPanel}>Login</button></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp