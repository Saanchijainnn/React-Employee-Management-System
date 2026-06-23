import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className=" h-screen w-full p-10 ">
        <Header/>
        <div>
            <form >
                <h3>Task Title
                    <input type="text" placeholder="Enter task title" />
                    <h3>Description</h3>
                    <textarea name="" id="" cols=""></textarea>
                </h3>

            </form>
        </div>



    </div>
  )
}

export default AdminDashboard