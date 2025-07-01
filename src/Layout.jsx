import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import PickupModal from './components/PickupModal'
import AboutUs from './components/AboutUs'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <AboutUs />
            <Footer />
            <PickupModal />
        </>
    )
}

export default Layout