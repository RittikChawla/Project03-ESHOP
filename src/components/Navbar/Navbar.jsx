import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import DarkMode from './DarkMode'


const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blog',
  }
]

function Navbar() {
  return (
    <div className=' bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex  justify-between'>
          {/* Logo and Links Section */}
          <div className='flex justify-between items-center gap-4'>
            <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
            {/* Menu Items */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {
                  MenuLinks.map((data, index) => {
                    return (
                      <li key={index}>
                        <a href={data.link} className=' inline-block px-4 font-semibold text-gray-500 hover:text-black 
                       dark:text-slate-400 dark:hover:text-white  duration-200'>{data.name}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

          </div>

          {/* Navbar right Section */}
          <div className='flex justify-between items-center gap-4'>
            {/* Search Bar Section */}
            <div className=' relative group hidden sm:flex sm:gap-3 '>
              <input type='text' placeholder='Search' className='search-bar pl-1 pr-1' />
              <IoMdSearch className=' text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 ' />
            </div>

            {/* Order-button Section */}

            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600
              dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
              </div>
            </button>

            {/* Dark Mode Section */}
            <aside>
              <DarkMode />
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar