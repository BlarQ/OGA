'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-secondary z-50'>
        <div className='flex justify-between items-center px-4 lg:px-16 w-full h-24'>
          <Link href="#">
            <Image src='/o3logo.png' alt='logo' width={70} height={70} />
          </Link>
          <div className='lg:hidden md:hidden'>
            <button onClick={toggleMenu} className="z-50">
              {isOpen ? (
                <IoCloseSharp className='h-6 w-6 text-tertiary text-lg' />
              ) : (
                <GiHamburgerMenu className='h-6 w-6 text-tertiary text-lg' />
              )}
            </button>
          </div>

          <nav className='hidden lg:flex space-x-8 mx-auto text-tertiary font-semibold'>
            <ul className='flex justify-between items-center gap-8'>
              <li className='group duration-300'>
                <Link href='/' className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300 active:border-b-primary'>
                  Find Events
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300 active:border-b-primary'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/faq' className='hover:border-b-2 w-4 hover:border-b-primary hover:cursor-pointer transition-all duration-300 active:border-b-primary'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href='/' className='hover:border-b-2 hover:border-b-primary hover:cursor-pointer transition-all duration-300 active:border-b-primary'>
                  Retrieve Ticket
                </Link>
              </li>
            </ul>
          </nav>

          <div className='lg:flex md:flex hidden space-x-4'>
            <Link href='#'><button className='bg-primary rounded-full p-2 w-36 text-white font-semibold'>Get Started</button></Link>
            <Link href='#'><button className='bg-transparent rounded-full p-2 w-36 text-primary border-primary border-2 font-semibold'>Login</button></Link>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-24"></div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='lg:hidden md:hidden fixed inset-0 bg-secondary bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-tertiary z-40'
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href='/' className='text-2xl hover:text-primary font-semibold' onClick={closeMenu}>Find Events</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href='/about' className='text-2xl hover:text-primary font-semibold' onClick={closeMenu}>About</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href='/faq' className='text-2xl hover:text-primary font-semibold' onClick={closeMenu}>FAQs</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href='/' className='text-2xl hover:text-primary font-semibold' onClick={closeMenu}>Retrieve Ticket</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href='/' onClick={closeMenu}>
                <button className='bg-primary text-white py-3 px-8 rounded-full text-lg'>Get Started</button>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href='/' onClick={closeMenu}>
                <button className='bg-transparent text-primary border-2 border-primary py-3 px-8 rounded-full text-lg'>Login</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header