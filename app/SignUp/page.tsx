import React, { useEffect, useState } from 'react'
import { Link, unstable_HistoryRouter } from 'react-router-dom'
import links from '../../utilities/links'
import './signup.css'

interface Validation {
    username: string[],
    password: string[],
    email: string[]
}

function SignUp({ loadLoginPanel }) {

    const satisfied = 'line-through text-green-900'
    const unsatisfied = 'text-red-500'

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayUsernameValidator, setDisplayUsernameValidator] = useState(false)
    const [displayEmailValidator, setDisplayEmailValidator] = useState(false)
    const [displayPasswordValidator, setDisplayPasswordValidator] = useState(false)
    const [validation, setValidation] = useState<Validation>({
        username: [],
        password: [],
        email: []
    })

    const [lblEmptyUname, setLblEmptyUname] = useState(unsatisfied)
    const [lblSpecCharUname, setLblSpecCharUname] = useState(unsatisfied)

    useEffect(() => {
        const initValidation = {
            username: [
                'Cannot be empty',
                'Cannot contain special characters'
            ]
            ,
            email: [
                'Valid email address',
            ],
            password: [
                'Must be at least 8 characters long',
                'Must have at least 1 Uppercase',
                'Must have at least 1 Special Symbol',
            ]
        }

        setValidation(prev => initValidation)
    }, [])

    const usernameChanged = (e) => {
        if (username === '') {
            setDisplayUsernameValidator(false)
            setLblEmptyUname(unsatisfied)
        }
        else {
            setDisplayUsernameValidator(true)
            setLblEmptyUname(satisfied)
        }
        setUsername(prev => e.target.value)


    }

    const emailChanged = (e) => {
        if (email === '') setDisplayEmailValidator(false)
        else setDisplayEmailValidator(true)
        setEmail(prev => e.target.value)
    }

    const passwordChanged = (e) => {
        if (password === '') setDisplayPasswordValidator(false)
        else setDisplayPasswordValidator(true)
        setPassword(prev => e.target.value)
    }

    const usernameFocused = () => {
        setDisplayEmailValidator(false)
        setDisplayPasswordValidator(false)
    }

    const emailFocused = () => {
        setDisplayUsernameValidator(false)
        setDisplayPasswordValidator(false)
    }

    const passwordFocused = () => {
        setDisplayEmailValidator(false)
        setDisplayUsernameValidator(false)
    }

    const validateInputParameters = () => {
        if (username === '') {

        }
    }

    return (
        <>
            <div className='panel-wrapper'>
                <div className='panel'>
                    {/* <div className='decorator'></div> */}
                    <div className='panel-internal'>
                        <iframe src="https://lottie.host/?file=23fc05a6-1216-4bac-a2fe-d326b9557661/rZEVtkxEoa.json" title='wave'></iframe>
                        <div aria-hidden='true' className='login-panel-back'></div>
                        <div className='main-container'>
                            <div className='py-10'>
                                <h1 className='font-black text-center text-5xl'>Sign Up</h1>
                            </div>
                            <div className='text-box-wrapper'>
                                <label htmlFor="">Username</label>
                                <input type="text" name="" id="username" value={username} onChange={usernameChanged} onFocus={usernameFocused} className='text-box' />
                                {displayUsernameValidator &&
                                    <div className='input-validator-details'>
                                        <ul>
                                            <li className={`${lblEmptyUname}`} ><i className='fa-solid fa-close'></i> Cannot be empty</li>
                                            <li className={`${lblSpecCharUname}`} ><i className='fa-solid fa-close'></i> Cannot contain special characters</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className='text-box-wrapper'>
                                <label htmlFor="">Email</label>
                                <input type="text" name="" id="email" value={email} onChange={emailChanged} onFocus={emailFocused} className='text-box' />
                                {displayEmailValidator &&
                                    <div className='input-validator-details'>
                                        <ul>
                                            {validation.email.map((item, i) => (
                                                <li className={``} key={i}><i className='fa-solid fa-close'></i> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className='text-box-wrapper'>
                                <label htmlFor="">Password</label>
                                <input type="password" name="" id="password" value={password} onChange={passwordChanged} onFocus={passwordFocused} className='text-box' />
                                {displayPasswordValidator &&
                                    <div className='input-validator-details'>
                                        <ul>
                                            {validation.password.map((item, i) => (
                                                <li className={``} key={i}><i className='fa-solid fa-close'></i> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className='text-box-wrapper'>
                                <button className='signup-button' onClick={validateInputParameters}>Create Account</button>
                            </div>
                            <div className='text-box-wrapper '>
                                <p className='w-full'>Already have an account? <Link to={'/' + links.root.login}><button className='sign-up' onClick={loadLoginPanel}>Login</button></Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp