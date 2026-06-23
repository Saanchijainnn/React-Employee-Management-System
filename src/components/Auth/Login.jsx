import React from 'react'
import { useState } from 'react'

const Login = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const submitHandler = (e)=>{
        e.preventDefault();
        

        setEmail("");
        setPassword("");
        
      }





  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <form
      onSubmit={(e)=>submitHandler(e)
      }
       className="border border-emerald-500 rounded-2xl p-16 flex flex-col items-center gap-6 w-96">
        <input required
          className="w-full bg-transparent border border-emerald-500 rounded-full py-3 px-6 text-white text-base outline-none placeholder-gray-500"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input required
          className="w-full bg-transparent border border-emerald-500 rounded-full py-3 px-6 text-white text-base outline-none placeholder-gray-500"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-full transition-colors">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login