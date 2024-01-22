import React from 'react'

export const Header = () => {
  return (
    <header>
      {/* <h1 className='text-3xl font-bold m-8 text-center'>Secrets Base64 Tool</h1> */}
      <h1 className='
        text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500
        text-center m-10'
      >
        Secrets Base64 Tool
      </h1>
      <h2 className='text-l font-semibold m-8 max-w-xl'><em>Tool to manage List Secrets, simply you paste the Base64 and it generate a List for all secrets that you can edit and save</em></h2>
    </header>
  )
}
