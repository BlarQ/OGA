'use client'
import React from 'react'
import { LineWave } from 'react-loader-spinner'

const loading = () => {
  return (
    <div className='flex 
    items-center 
    justify-center 
    h-[80vh]
    ml-10
    sm:ml-0'>

      <LineWave
        visible={true}
        height="150"
        width="150"
        color="#fcab10"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />

    </div>
  )
}

export default loading