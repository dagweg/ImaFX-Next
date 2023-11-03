import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/globals.css"
import "./styles/index.css"
import "./styles/tailwind.css"
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
import Privacy from './pages/Account/Privacy'
import Preferences from './pages/Account/Preferences'
import Notifications from './pages/Account/Notifications'
import Payment from './pages/Account/Payment'
import OrdersHistory from './pages/Account/OrdersHistory'
import SupportCenter from './pages/Account/SupportCenter'
import Logout from './pages/Account/Logout'
import DeleteAccount from './pages/Account/DeleteAccount'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


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
                <Route path={links.account.notifications} element={<Notifications />} />
                <Route path={links.account.preferences} element={<Preferences />} />
                <Route path={links.account.payment} element={<Payment />} />
                <Route path={links.account.ordersHistory} element={<OrdersHistory />} />
                <Route path={links.account.supportHelpCenter} element={<SupportCenter />} />
                <Route path={links.account.logOut} element={<Logout />} />
                <Route path={links.account.deleteAccount} element={<DeleteAccount />} />

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
