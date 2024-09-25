import React from 'react'
import Footer from '../components/Footer'
import { about } from '../components/data'

const page = () => {
  return (
    <div>
        <div className='px-4 
        md:px-[12%]
        min-h-[100vh]
        flex
        flex-col
        justify-start
        md:py-20
        py-10
        gap-14'>
            <div className='grid 
            md:grid-cols-[60%_40%] 
            gap-5
            md:gap-7'>
                <h1 className='sm:text-5xl
                text-4xl 
                font-semibold
                '>Connecting You to Unforgettable Moments</h1>
                <p className='text-gray-500
                leading-7
                md:leading-8
                text-left 
                md:text-lg
                w-[90%]
                md:w-full'>Our mission is to connect you with the events you love. We are dedicated to providing a seamless platform where securing tickets is effortless and convenient. Learn more about who we are and what drives us to create memorable moments for you, bringing you closer to unforgettable experiences.</p>
            </div>
            <div className='bg-[url(/aboutbg2.jpg)]
            bg-no-repeat
            bg-cover
            flex
            flex-col
            md:flex-row
            justify-between 
            items-center 
            py-12
            md:px-12
            px-10 
            gap-8
            rounded-3xl'>
                {
                    about.map((item, index) => (
                        <div key={index} className='border-[.5px]
                        w-full 
                        md:w-[50%] 
                        min-h-[35vh] 
                        flex 
                        flex-col 
                        justify-center 
                        items-center 
                        gap-10 
                        rounded-3xl
                        text-white
                        backdrop-brightness-[.1]
                        backdrop-blur-3xl
                        backdrop-contrast-[.45]
                        backdrop-opacity-[.97]'>
                            <p className='text-5xl font-semibold'>{item.figure}</p>
                            <h2 className='font-semibold'>{item.title}</h2>
                        </div>
                    ))
                }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default page