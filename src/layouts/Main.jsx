import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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