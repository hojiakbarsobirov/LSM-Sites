import React from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Pages = () => {
    return (
        <div data-aos="fade-right" className='bg-white sm:w-full md:w-[5%] lg:w-[19%] xl:w-[18%] sm:h-14 md:h-[77vh] lg:h-[77vh] xl:h-[77vh] rounded-xl shadow-lg gap-2 flex md:justify-between sm:justify-between lg:justify-start xl:justify-start md:items-center sm:items-center lg:items-start xl:items-start md:flex-col lg:flex-col xl:flex-col sm:py-2 md:py-2 lg:py-0 xl:py-3 p-2'>

            <Link className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0  lg:px-4 xl:px-3 ' to={'/'}>
                <img className='w-5 max-w-full h-auto' src="./home.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Home</h3>
            </Link>

            <Link className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0  lg:px-4 xl:px-3 ' to={'/courses'}>
                <img className='w-5 max-w-full h-auto' src="./book.png" alt="" />
                <h3 className=' text-lg hidden lg:block '>Courses</h3>
            </Link>

            <Link to={'/assignment'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0  lg:px-4 xl:px-3 '>
                <img className='w-5 max-w-full h-auto' src="./assignment.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Assignments</h3>
            </Link>

            <Link to={'/training'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
                <img className='w-5 max-w-full h-auto' src="./joystick.png" alt="" />
                <h3 className=' text-lg hidden lg:block'><Link>In-Car Training</Link></h3>
            </Link>

            <Link to={'/calendar'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
                <img className='w-5 max-w-full' src="./calendar.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Calendar</h3>
            </Link>

            <Link to={'/statistics'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
                <img className='w-5 max-w-full h-auto' src="./statistics.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Statistics</h3>
            </Link>

            <Link to={'/certificates'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
                <img className='w-5 max-w-full h-auto' src="./certificates.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>My Certificates</h3>
            </Link>

            <Link to={'/settings'} className='flex sm:justify-center md:justify-center lg:justify-start xl:justify-start items-center  gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3'>
                <img className='w-5 max-w-full h-auto' src="./settings.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Settings</h3>
            </Link>

        </div>
    )
}

export default Pages