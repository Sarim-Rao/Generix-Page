import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <div className='main-container'>

        <Outlet />
      </div>
      <Footer />
    </div>


    </>
  )
}

export default DefaultLayout
