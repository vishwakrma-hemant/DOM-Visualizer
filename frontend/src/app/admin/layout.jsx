import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

const layout = ({children}) => {
  return (
    <>
   <Navbar />
    {children}
    </>
  )
}

export default layout