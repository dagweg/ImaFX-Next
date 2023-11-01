import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/globals.css"
import "./styles/index.css"
import "./styles/tailwind.css"
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ImaFX from './pages/ImaFX'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Account from './pages/Account'

function Index() {
    return (
        <>
            <Router>
                <Header />
                <div className='w-screen h-screen bg-gradient-to-r from-gray-50 to-gray-100 pt-16'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/imafx" element={<ImaFX />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    )
}


ReactDOM.render(<Index />, document.getElementById('root'))
