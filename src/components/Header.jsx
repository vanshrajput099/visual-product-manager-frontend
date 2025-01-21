import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between p-10 items-center
      xs-max:px-2 xs-max:py-5 xs-max:flex-col
      xs:flex-col 
      sm:flex-col 
    '>
      <h1 className='text-white text-3xl 
        xs-max:text-xs
        xs:text-2xl
        md:text-2xl
      '>Visual Product Matcher</h1>
      <h1 className='text-white text-xl font-light 
        xs-max:text-xs
        md:text-xl
      '>Upload Your Images</h1>
    </div>
  )
}

export default Header