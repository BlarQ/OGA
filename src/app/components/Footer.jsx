import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='px-[10%]'>
            <div className='bg-tertiary 
            text-white 
            py-36 
            flex 
            items-center 
            justify-center 
            flex-col
            rounded-[2rem]
            gap-4'>

                <div className='flex
                items-center
                justify-center
                flex-col
                gap-4'>
                    <h1 className='text-6xl
                    font-semibold'>No Delays, No Huddles.</h1>
                    <p className='text-base
                    text-secondary'>Discover, create & experience unforgettable moments with EventPorte</p>
                </div>

                <div className='flex
                items-center
                justify-center
                gap-4'>
                    <Link className='border-primary
                    border-2
                    py-2
                    px-8
                    rounded-full
                    bg-primary
                    font-semibold
                    duration-300' href="/">Buy a Ticket</Link>
                    <Link className='border-primary
                    border-2
                    text-primary
                    py-2
                    px-8
                    rounded-full
                    font-semibold
                    duration-300' href="/">Create Event</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer