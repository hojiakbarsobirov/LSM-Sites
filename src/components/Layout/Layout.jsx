import React from 'react'
import NavbarPage from '../NavbarPage'
import Pages from '../Pages'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className='bg-gray-200 w-full h-screen sm:p-3 md:p-3 lg:p-5'>
                <NavbarPage />
                <div className=' w-full h-[85vh] flex justify-center items-start space-x-5 py-5'>
                    <Pages />
                    <div className='bg-white w-[85%] h-full rounded-xl shadow-lg'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout