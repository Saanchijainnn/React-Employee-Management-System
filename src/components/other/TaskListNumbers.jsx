import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className="flex m-10 justify-between gap-5 ">
        <div className="px-9 py-6 rounded-xl  w-[45%] bg-red-300 ">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className=" text-xl font-medium ">New task</h3>
        </div>
         <div className="px-9 py-6 rounded-xl  w-[45%] bg-blue-300 ">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className=" text-xl font-medium ">New task</h3>
        </div>
         <div className="px-9 py-6 rounded-xl  w-[45%] bg-green-300 ">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className=" text-xl font-medium ">New task</h3>
        </div>
         <div className="px-9 py-6 rounded-xl  w-[45%] bg-yellow-300 ">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className=" text-xl font-medium ">New task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers