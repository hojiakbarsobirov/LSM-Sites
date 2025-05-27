import React from 'react'

const NavbarPage = () => {
    return (
        <div data-aos="fade-down" className='shadow-lg bg-white w-full h-20 rounded-xl flex justify-between items-center px-4 sm:px-6 md:px-8'>
            <i className='font-bold text-lg sm:text-xl'>CoddyCamp</i>

            <input
                className='hidden sm:block w-40 md:w-[280px] h-10 border-2 rounded-md border-gray-300 pl-2'
                type="text"
                placeholder='Search ...'
            />

            <div className='flex items-center'>
                <div className='flex space-x-3 sm:space-x-5 px-2 sm:px-4 border-r-2'>
                    <img className='w-5 sm:w-6' src="./message.png" alt="message" />
                    <img className='w-5 sm:w-6' src="./notification.png" alt="notification" />
                </div>

                <div className='flex items-center px-3 sm:px-5 space-x-2 sm:space-x-3'>
                    <h2 className='text-sm sm:text-base font-medium'>Thomas Shelbek</h2>
                    <img className='w-5 sm:w-6' src="./user.png" alt="user" />
                </div>
            </div>
        </div>
    )
}

export default NavbarPage
