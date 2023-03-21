import React from 'react'

//components
import Footer from './Footer'
import Navbar from './Navbar'

//styles
import "normalize.css"
import "../assets/css/main.css"

export default function Layout({children}) {
  return (
   <>
      <Navbar />
      {children}
      <Footer /> 
   </>
  )
}
