import React from 'react'
import Navbar from './navbar'
import footer from './footer'


const MainLayout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <footer />
    </>
   
  
    
  )
}

export default MainLayout