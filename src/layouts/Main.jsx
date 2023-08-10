import React from 'react'
import Header from '../components/header.jsx/Header'
import Footer from '../components/header.jsx/Footer'
import { Outlet } from 'react-router-dom'


function Main({children}) {
  return (
   <>
      <Header/>
      <Outlet/>
      <Footer/>

   </>
  )
}

export default Main