import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='
        px-16 
        bg-secondary'>
            <div className='py-10
            px-[12%]'>
                <div className='bg-tertiary
                py-24
                gap-4
                flex
                flex-col
                rounded-[2rem]
                '>
                    <div className='flex
                    items-center
                    justify-center
                    flex-col
                    gap-4'>
                        <h1 className='text-6xl
                        font-semibold
                        text-white'>Seamless and Hassle-Free.</h1>
                        <p className='text-base
                        text-secondary'>Explore, create, and enjoy unforgettable moments with O<sub>3</sub> Ticketing App.</p>
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
            </div>


            <div className='
            divide-y-2
            divide-tertiary
            
            '>
                <div>

                </div>

                <div className='flex
            justify-between
            items-center
            py-7'>
                    <div>
                        <Image src="/o3logo.png" height={50} width={50} alt='O3 Logo' />
                    </div>

                    <nav>
                        <ul className='flex
                    gap-8
                    font-semibold'>
                            <li>
                                <Link href="/">Find Events</Link>
                            </li>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">FAQs</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='font-semibold'>
                        <p>&copy; {new Date().getFullYear()} OGA(O<sub>3</sub>)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer