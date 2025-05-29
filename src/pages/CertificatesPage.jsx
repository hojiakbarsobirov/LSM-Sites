import React from 'react'

const CertificatesPage = () => {
  return (
    <div className='w-full h-full rounded-xl'>
      <div className=' w-full h-auto py-3 flex justify-between items-center px-5'>
        <p className='text-2xl font-bold sticky'>Certificates</p>
      </div>

      <div className=' w-full h-[435px] flex flex-wrap justify-center items-start gap-5 xl:p-5 overflow-y-scroll'>
        <img className='w-[480px] h-[400px]' src="./certificate-img.png" alt="" />
        <img className='w-[480px] h-[400px]' src="./certificate-img-2.webp" alt="" />
        <img className='w-[480px] h-[400px]' src="./certificate-img-3.jpg" alt="" />
        <img className='w-[480px] h-[400px]' src="./certificate-img-4.jpg" alt="" />
      </div>
    </div>
  )
}

export default CertificatesPage
