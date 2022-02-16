

import React from 'react'
import NavBar from './../components/NavBar';



const LayoutApp = ({children}) => {


  return (
    <div >
     <NavBar />
    <h2>Layout</h2>
      {children}
    </div>
  )
}

export default LayoutApp