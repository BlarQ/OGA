import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='
        px-4 md:px-16 
        bg-secondary'>
            <div className='py-10
            md:px-[12%]'>
                <div className='bg-tertiary
                md:py-24
                py-10
                gap-8
                md:gap-4
                flex
                flex-col
                rounded-[2rem]'>
                    <div className='flex
                    items-center
                    justify-center
                    flex-col
                    gap-8
                    md:gap-4
                    '>
                        <h1 className='text-3xl md:text-6xl
                        font-semibold
                        text-white 
                        text-center
                        md:w-full
                        w-[80%]'>Seamless and Hassle-Free.</h1>
                        <p className='text-sm 
                        md:text-base
                        text-secondary 
                        text-center
                        md:w-full
                        w-[80%]'>Explore, create, and enjoy unforgettable moments with O<sub>3</sub> Ticketing App.</p>
                    </div>

                    <div className='flex
                    flex-row
                    items-center
                    justify-center
                    gap-4'>
                        <Link className='border-primary
                        border-2
                        py-2
                        px-6 md:px-8
                        rounded-full
                        bg-primary
                        font-semibold
                        duration-300
                        text-center' href="/">Buy a Ticket</Link>
                        <Link className='border-primary
                        border-2
                        text-primary
                        py-2
                        px-6 md:px-8
                        rounded-full
                        font-semibold
                        duration-300
                        text-center' href="/">Create Event</Link>
                    </div>
                </div>
            </div>

            <div className='
            divide-y-2
            divide-tertiary'>
                <div></div>

                <div className='flex
                flex-col md:flex-row
                justify-between
                md:items-center
                py-7'>
                    <div>
                        <Image src="/o3logo.png" height={50} width={50} alt='O3 Logo' />
                    </div>

                    <nav className='mt-4 md:mt-0'>
                        <ul className='flex
                        flex-row
                        gap-4 md:gap-8
                        font-semibold
                        md:items-center'>
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

                    <div className='font-semibold mt-4 md:mt-0'>
                        <p>&copy; {new Date().getFullYear()} OGA (O<sub>3</sub>)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
