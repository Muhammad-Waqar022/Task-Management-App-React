import React from 'react'

const Filters = () => {
  return (
    <div className='flex gap-5 p-3 border border-gray-300 rounded-md mb-5'>
        <button className='text-white py-1.5 px-5 bg-blue-500 rounded-md'>All Tasks</button>
        <button>Pending</button>
        <button>Completed</button>
    </div>
  )
}

export default Filters