import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/EmpDashboard'
import AdminDashboard from './components/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <>
    <Login/>
    {/* <EmpDashboard /> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
