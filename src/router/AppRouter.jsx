import {React} from 'react'
import {BrowserRouter, Route, Routes } from "react-router"
import HomePage from '../page/HomePage'
import LoginPage from '../page/LoginPage'
import TodoPage from '../page/TodoPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route index element="Home"/> 
        <Route path='login' element={<LoginPage/>}/>
        <Route path='todo' element={<TodoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter