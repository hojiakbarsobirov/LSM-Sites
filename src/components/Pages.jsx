import React from 'react'

const Pages = () => {
  return (
    <div className='bg-white w-[17%] h-full rounded-xl shadow-lg gap-2 flex justify-start items-center flex-col p-2'>

      <div className='flex items-center relative focus:right-5 gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./home.png" alt="" />
        <h3 className=' text-lg'>Home</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./book.png" alt="" />
        <h3 className=' text-lg'>Courses</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./assignment.png" alt="" />
        <h3 className=' text-lg'>Assignments</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./joystick.png" alt="" />
        <h3 className=' text-lg'>In-Car Training</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./calendar.png" alt="" />
        <h3 className=' text-lg'>Calendar</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./statistics.png" alt="" />
        <h3 className=' text-lg'>Statistics</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./certificates.png" alt="" />
        <h3 className=' text-lg'>My Certificates</h3>
      </div>

      <div className='flex items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl px-4'>
        <img className='w-5' src="./settings.png" alt="" />
        <h3 className=' text-lg'>Settings</h3>
      </div>

    </div>
  )
}

export default Pages