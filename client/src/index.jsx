import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/globals.css"
import "./styles/index.css"
import "./styles/tailwind.css"
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Account from './pages/Account'
import LoginSignup from './pages/LoginSignup'

function Index() {
    return (
        <>
            <Router>
                <Header />
                <div className='h-screen bg-gradient-to-r from-gray-50 to-gray-100 pt-16'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Start" element={<Start />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/login" element={<LoginSignup />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    )
}


ReactDOM.render(<Index />, document.getElementById('root'))
