import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router'

function HomePage() {
  return (
   <div>
    <NavBar/>
    <Outlet/>
    <div className="min-h-screen bg-amber-300 flex items-center justify-center">
  <h1 className="text-6xl font-extrabold text-gray-900 select-none">
    Homepage
  </h1>
</div>
  </div>
  )
}

export default HomePage