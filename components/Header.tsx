import React from 'react'

export const Header = () => {
  return (
    <header>
      {/* <h1 className='text-3xl font-bold m-8 text-center'>Secrets Base64 Tool</h1> */}
      <h1 className='
        text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500
        text-center m-10'
      >
        Base64 Tool
      </h1>

      <h2 className='text-l font-semibold m-8 max-w-xl'><em>Discover a powerful tool that allows you to efficiently encode and decode data between Base64 representations and raw text.</em></h2>
    </header>
  )
}
