import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
   <nav className='bg-gray-900 text-white px-6 py-4 shadow-md space-x-2'>
    <NavLink className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition" to={'/'}>Home</NavLink>
    <NavLink className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition" to={'/login'}>Login</NavLink>
    <NavLink className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition" to={'/todo'}>Todo</NavLink>
   </nav>
  )
}

export default NavBar