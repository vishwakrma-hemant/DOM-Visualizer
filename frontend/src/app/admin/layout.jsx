import React from 'react';
import Navbar from './navbar';

const layout = ({children}) => {
  return (
    <>
   <Navbar />
    {children}
    </>
  )
}

export default layout