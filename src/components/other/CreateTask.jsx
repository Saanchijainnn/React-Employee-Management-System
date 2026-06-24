import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap w-full items-start justify-between">

          {/* LEFT COLUMN */}
          <div className="w-1/2">

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-600 text-gray-200 placeholder-gray-500 mb-4"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-600 text-gray-400 mb-4"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-600 text-gray-200 placeholder-gray-500 mb-4"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-600 text-gray-200 placeholder-gray-500"
              />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-2/5 flex flex-col">

            <div className="flex flex-col flex-1">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea
                className="text-sm py-1 px-2 w-full h-36 rounded outline-none bg-transparent border-[1px] border-gray-600 text-gray-200 resize-none mb-4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded cursor-pointer"
            >
              Create Task
            </button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask