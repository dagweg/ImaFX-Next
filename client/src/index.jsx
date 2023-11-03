import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/globals.css"
import "./styles/index.css"
import "./styles/tailwind.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Account from './pages/Account'
import LoginSignup from './pages/LoginSignup'
import RootLayout from './layouts/RootLayout'
import links from './links'
import Dashboard from './pages/Account/Dashboard'
import Profile from './pages/Account/Profile'
import Security from './pages/Account/Security'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Privacy from './pages/Account/Privacy'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path={links.root.home} element={<Home />} />
            <Route path={links.root.start} element={<Start />} />
            <Route path={links.root.pricing} element={<Pricing />} />
            <Route path={links.root.account} element={<Account />} >
                <Route path={links.account.dashboard} element={<Dashboard />} />
                <Route path={links.account.profile} element={<Profile />} />
                <Route path={links.account.security} element={<Security />} />
                <Route path={links.account.privacy} element={<Privacy />} />

            </Route>
            <Route path={links.root.login} element={<LoginSignup />}>
                <Route path={links.root.login} />
                <Route path={links.root.signup} />
            </Route>

        </Route>
    )
)

function Index() {
    return (
        <RouterProvider router={router} />
    )
}


ReactDOM.render(<Index />, document.getElementById('root'))
