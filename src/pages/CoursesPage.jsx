import React from 'react'

const CoursesPage = () => {
  return (
    <div className='w-full h-full overflow-y-scroll p-4'>
      <div className='w-full h-10 flex justify-start items-center'>
        <h3 className='xl:font-bold xl:text-xl sm:text-sm sm:font-medium md:text-md md:font-medium lg:text-lg lg:font-bold'>Graduated Licensing System</h3>
      </div>

      <div className="shadow-md rounded-xl p-4 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 max-w-full">
        {/* video */}
        <div className=" rounded-md w-full h-64 sm:h-[400px] md:h-[500px] lg:w-48 lg:h-48 xl:w-48 xl:h-48 flex-shrink-0">
          <video className='w-full h-full rounded-md' controls>
            <source src='' />
          </video>
        </div>

        <div className="flex flex-col justify-between flex-grow">

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl sm:text-2xl">G1 Driver's License Course</h3>
              <p className="text-blue-500 font-medium cursor-pointer hover:underline">CONTINUE</p>
            </div>
            <p className="text-gray-600 text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate libero, minima doloribus iusto consequuntur ipsam voluptates enim recusandae, dolorum laboriosam. At, nemo.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-between">

            <div className="bg-gray-200 w-40 h-24 rounded-md flex flex-col justify-center px-4">
              <p className="font-bold text-lg">N/A</p>
              <p className="text-gray-500 text-sm">Total Duration</p>
            </div>

            <div className="bg-gray-200 w-40 h-24 rounded-md flex flex-col justify-center px-4">
              <p className="font-bold text-lg">2 Hours</p>
              <p className="text-gray-500 text-sm">In Class Instruction</p>
            </div>

            <div className="bg-gray-200 w-40 h-24 rounded-md flex flex-col justify-center px-4">
              <p className="font-bold text-lg">0 Hours</p>
              <p className="text-gray-500 text-sm">In Car Instruction</p>
            </div>

            <div className="bg-gray-200 w-40 h-24 rounded-md flex flex-col justify-center px-4">
              <p className="font-bold text-lg">2 Seats Left</p>
              <p className="text-gray-500 text-sm">Availability</p>
            </div>

          </div>

        </div>

      </div>


    </div>

  )
}

export default CoursesPage