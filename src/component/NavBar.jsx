import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
   <nav className='h-13 flex item-center gap-6'>
    <NavLink className={"cursor-pointer hover:underline"} to={'/'}>Home</NavLink>
    <NavLink className={"cursor-pointer hover:underline"} to={'/login'}>Login</NavLink>
    <NavLink className={"cursor-pointer hover:underline"} to={'/todo'}>Todo</NavLink>

   </nav>
  )
}

export default NavBar