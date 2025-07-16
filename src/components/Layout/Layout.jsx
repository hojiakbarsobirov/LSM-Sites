import React from 'react'
import NavbarPage from '../NavbarPage'
import Pages from '../Pages'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className='bg-gray-200 w-full h-auto py-5 sm:px-2 sm:p-3 md:p-3 lg:p-5 px-5'>
                <NavbarPage />
                <div className=' w-full h-auto sm:flex-wrap md:flex lg:flex xl:flex justify-center items-start md:space-y-0 lg:space-y-0 sm:space-y-5 gap-5 py-5'>
                    <Pages />
                    <div data-aos="fade-left" className='bg-white sm:w-full md:w-[92%] lg:w-[78%] xl:w-[80%] h-[77vh] rounded-xl shadow-lg mt-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout