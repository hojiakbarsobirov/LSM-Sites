import React from 'react'
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div className='bg-white sm:w-[17%] max-w-full h-full rounded-xl shadow-lg gap-2 flex justify-start items-start flex-col p-2'>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0  lg:px-4 xl:px-3 ' to={'/'}>
          <img className='w-5 max-w-full h-auto' src="./home.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Home</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:4 xl:px-3' to={'/courses'}>
          <img className='w-5 max-w-full h-auto' src="./book.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Courses</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:4 xl:px-3'>
          <img className='w-5 max-w-full h-auto' src="./assignment.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Assignments</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
          <img className='w-5 max-w-full h-auto' src="./joystick.png" alt="" />
          <h3 className=' text-lg hidden md:block'><Link>In-Car Training</Link></h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
          <img className='w-5 max-w-full' src="./calendar.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Calendar</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
          <img className='w-5 max-w-full h-auto' src="./statistics.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Statistics</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
          <img className='w-5 max-w-full h-auto' src="./certificates.png" alt="" />
          <h3 className=' text-lg hidden md:block'>My Certificates</h3>
      </Link>

      <Link className='flex items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
          <img className='w-5 max-w-full h-auto' src="./settings.png" alt="" />
          <h3 className=' text-lg hidden md:block'>Settings</h3>
      </Link>

    </div>
  )
}

export default Pages