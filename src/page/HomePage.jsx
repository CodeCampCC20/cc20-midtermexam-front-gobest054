import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router'

function HomePage() {
  return (
   <div>
    <NavBar/>
    <Outlet/>
  </div>
  )
}

export default HomePage