import React from 'react'
import { Link } from 'react-router-dom'

const CoursesPage = () => {
  return (
    <>
      <div className='w-full h-full overflow-y-scroll p-4'>
        <div className="w-full h-10 flex justify-start items-center">
          <h3 className="text-sm font-medium sm:text-xl md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-2xl">
            Graduated Licensing System
          </h3>
        </div>

        <Link target='_blank' to={'/https://www.youtube.com/watch?v=CbbhYlrILW8&embeds_referring_euri=http%3A%2F%2Flocalhost%3A5173%2F&source_ve_path=MjM4NTE'} className="shadow-md target:_blank mb-8 rounded-xl p-4 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 max-w-full">

          <div className=" rounded-md w-full h-64 sm:h-[400px] md:h-[500px] lg:w-48 lg:h-48 xl:w-48 xl:h-48 flex-shrink-0">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/CbbhYlrILW8?si=YGT30i3D_E1QlaFt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="flex flex-col justify-between flex-grow">

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl sm:text-2xl"><Link to={'/https://www.youtube.com/watch?v=CbbhYlrILW8&embeds_referring_euri=http%3A%2F%2Flocalhost%3A5173%2F&source_ve_path=MjM4NTE'}>G1 Driver's License Course</Link></h3>
                <p className="text-blue-500 font-medium cursor-pointer hover:underline">CONTINUE</p>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate libero, minima doloribus iusto consequuntur ipsam voluptates enim recusandae, dolorum laboriosam. At, nemo.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-between">

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">N/A</p>
                <p className="text-gray-500 text-sm">Total Duration</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">2 Hours</p>
                <p className="text-gray-500 text-sm">In Class Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">0 Hours</p>
                <p className="text-gray-500 text-sm">In Car Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">2 Seats Left</p>
                <p className="text-gray-500 text-sm">Availability</p>
              </div>
            </div>
          </div>
        </Link>

        <Link target='_blank' to={'/https://www.youtube.com/channel/UC5p_273k3OZ4R39r7HPtdqg'} className="shadow-md rounded-xl p-4 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 max-w-full">
          {/* video */}
          <div className=" rounded-md w-full h-64 sm:h-[400px] md:h-[500px] lg:w-48 lg:h-48 xl:w-48 xl:h-48 flex-shrink-0">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/AvRpCKQ8KPY?si=Zlv558wD0gDwU1dL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="flex flex-col justify-between flex-grow">

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl sm:text-2xl">G2 Driver's License Course</h3>
                <p className="text-blue-500 font-medium cursor-pointer hover:underline"><Link to={'/https://www.youtube.com/channel/UC5p_273k3OZ4R39r7HPtdqg'}>CONTINUE</Link></p>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate libero, minima doloribus iusto consequuntur ipsam voluptates enim recusandae, dolorum laboriosam. At, nemo.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-between">

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">N/A</p>
                <p className="text-gray-500 text-sm">Total Duration</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">0 Hours</p>
                <p className="text-gray-500 text-sm">In Class Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">2 Hours</p>
                <p className="text-gray-500 text-sm">In Car Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">10 Seats Left</p>
                <p className="text-gray-500 text-sm">Availability</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="w-full h-10 flex justify-start items-center">
          <h3 className="text-sm font-medium sm:text-xl md:text-lg md:font-semibold lg:text-xl lg:font-bold xl:text-2xl">
            M1 Motorcycle Licence Course
          </h3>
        </div>


        <Link target='_blank' to={'/https://www.youtube.com/watch?v=jyNpYhmPwMs'} className="shadow-md rounded-xl p-4 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 max-w-full">
          {/* video */}
          <div className=" rounded-md w-full h-64 sm:h-[400px] md:h-[500px] lg:w-48 lg:h-48 xl:w-48 xl:h-48 flex-shrink-0">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/jyNpYhmPwMs?si=kHwO4PI69VLPE98N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="flex flex-col justify-between flex-grow">

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl sm:text-2xl">G1 Driver's License Course</h3>
                <p className="text-blue-500 font-medium cursor-pointer hover:underline"><Link to={'/https://www.youtube.com/watch?v=jyNpYhmPwMs'}>CONTINUE</Link></p>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate libero, minima doloribus iusto consequuntur ipsam voluptates enim recusandae, dolorum laboriosam. At, nemo.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-between">

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">20 Hours</p>
                <p className="text-gray-500 text-sm">Total Duration</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">8 Hours</p>
                <p className="text-gray-500 text-sm">In Class Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">15 Hours</p>
                <p className="text-gray-500 text-sm">In Car Instruction</p>
              </div>

              <div className="bg-gray-200 w-28 xl:w-40 h-24 rounded-md flex flex-col justify-center px-4">
                <p className="font-bold text-lg">2 Seats Left</p>
                <p className="text-gray-500 text-sm">Availability</p>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </>

  )
}

export default CoursesPage