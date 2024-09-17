import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-secondary flex justify-between items-center px-16 w-full h-24'>
      <div>
        <Image src='/o3logo.png' alt='logo' width={70} height={70} />
      </div>

      <div>
        <ul className='flex space-x-8 mx-auto text-tertiary font-semibold'>
          <li className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300'>
            Find Events
          </li>
          <li className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300'>
            About
          </li>
          <li className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300'>
            FAQs
          </li>
          <li className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300'>
            Retrieve Ticket
          </li>
        </ul>
      </div>

      <div className='flex space-x-4'>
        <button className='bg-primary rounded-full p-2 w-36 text-white font-semibold'>Get Started</button>
        <button className='bg-transparent rounded-full p-2 w-36 text-primary border-primary border-2 font-semibold'>Login</button>
      </div>
    </div>
  )
}

export default Header
