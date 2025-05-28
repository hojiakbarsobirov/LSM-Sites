import React from 'react'
import {  NavLink, useLocation  } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Pages = () => {
     let location = useLocation();
     const currentPath = location.pathname
     console.log(currentPath);
     

     
    return (
        <div data-aos="fade-right" className='bg-white sm:w-full md:w-[5%] lg:w-[19%] xl:w-[18%] sm:h-14 md:h-[77vh] lg:h-[77vh] xl:h-[77vh] rounded-xl shadow-lg gap-2 flex md:justify-between sm:justify-between lg:justify-start xl:justify-start md:items-center sm:items-center lg:items-start xl:items-start md:flex-col lg:flex-col xl:flex-col sm:py-2 md:py-2 lg:py-0 xl:py-3 p-2'>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className="w-5 max-w-full h-auto" src="./home.png" alt="Home Icon" />
                <h3 className="text-lg hidden lg:block">Home</h3>
            </NavLink>

            <NavLink
                to="/courses"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full h-auto' src="./book.png" alt="" />
                <h3 className=' text-lg hidden lg:block '>Courses</h3>
            </NavLink>

            <NavLink
                to="/assignment"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full h-auto' src="./assignment.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Assignments</h3>
            </NavLink>

            <NavLink
                to="/calendar"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full' src="./calendar.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Calendar</h3>
            </NavLink>

            <NavLink
                to="/statistics"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full h-auto' src="./statistics.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Statistics</h3>
            </NavLink>

            <NavLink
                to="/certificates"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full h-auto' src="./certificates.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>My Certificates</h3>
            </NavLink>

            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    `flex sm:justify-center relative md:justify-center lg:justify-start xl:justify-start items-center gap-3 w-full h-12 transition ease-in-out hover:bg-gray-200 rounded-xl sm:px-0 lg:px-4 xl:px-3 ${isActive ? 'bg-white xl:font-bold xl:right-2' : ''
                    }`
                }
            >
                <img className='w-5 max-w-full h-auto' src="./settings.png" alt="" />
                <h3 className=' text-lg hidden lg:block'>Settings</h3>
            </NavLink>

        </div>
    )
}

export default Pages