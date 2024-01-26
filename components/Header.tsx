import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex flex-col justify-start my-10'>
      {/* <h1 className='text-3xl font-bold m-8 text-center'>Secrets Base64 Tool</h1> */}
      <div className='flex items-center mt-10 mb-4'>
        <h1 className='
          text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500
          text-start mh-4 me-8'
        >
          Base64 Tool
        </h1>
        <div className='size-20'>
          <Image src="/base64icon.png" alt="logo" width={70} height={40} layout="responsive"/>
        </div>
      </div>

      <h2 className='text-l font-semibold mb-8 max-w-xl'><em>Discover a powerful tool that allows you to efficiently Encode and Decode data between Base64 representations and raw text.</em></h2>
    </header>
  )
}
