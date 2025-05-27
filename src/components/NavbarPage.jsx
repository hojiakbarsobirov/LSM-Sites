import React from 'react'

const NavbarPage = () => {
    return (
        <div className='shadow-lg bg-white w-full h-20 rounded-xl flex justify-between items-center px-8'>
            <i className='font-bold text-xl'>REDCAR</i>

            <input className='w-[280px] h-10 placeholder:font-medium border-2 rounded-md border-gray-300 pl-2' type="text" placeholder='Search ...' />

            <div className='flex items-center'>
                <div className='flex space-x-5 px-4 border-r-2'>
                    <img className='w-8' src="./message.png" alt="" />
                    <img className='w-8' src="./notification.png" alt="" />
                </div>

                <div className='flex items-center px-5 space-x-3'>
                    <h2 className='font-medium'>Thomas Shelbek</h2>
                    <img className='w-8' src="./user.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavbarPage