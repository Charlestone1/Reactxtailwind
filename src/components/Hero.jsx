import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
      <div className='text-white'>
          <div className='max-w-[800px] mt-1[-96px] w-full  h-screen mx-auto text-center flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data.</h1>
              <div className='flex justify-center items-center'>
                  
                  <p className='md:text-5xl sm:text-4xl text-xl font-bold'> Fast, flexible financing for</p>
                  <div className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-gray-600' >
                    <Typewriter  options={{
                        autoStart: true,
                        loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('BTB')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('BTC')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('SASS')
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                        }} />
                    </div>
              </div>
              <p className='md:text-2xl text-xl font-bold text-gray-600'>
                  Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms
              </p>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
          </div>
    </div>
  )
}

export default Hero