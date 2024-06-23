import React from 'react'

function Navbar() {
  return (
    <div className=' bg-white dark:bg-gray-900 dark:text-white'>
        <div className='py-4'> 
            <div className='container'>
                {/* Logo and Links Section */}
                <div>
                    <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                </div>

                {/* Navbar right Section */}
            </div>
        </div>
    </div>
  )
}

export default Navbar