import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'


const App = () => {
   const [user,setUser]= useState(null)

   const handleLogin=(email,password)=>{

   }
   handleLogin()

  return (
    <>
      {!user ? <Login />: ""}
      {/*<EmployeeDashboard />*/}
      {/*<AdminDashboard/>*/}
      
    </>
  )
}

export default App
