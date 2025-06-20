import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import PickupModal from './components/PickupModal'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <PickupModal />
        </>
    )
}

export default Layout