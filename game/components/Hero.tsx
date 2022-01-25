import React from 'react'
import Image from 'next/image'

const Hero: React.FC = ({}) => {
    return (
        <section className='bg-orange-600 h-screen lg:min-h-[600px] grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-2'>
            <div className='px-10 lg:px-20 bg-orange-600 col-span-4 lg:col-span-3 lg:row-span-2 font-piazzolla flex flex-col justify-center items-center'>
                <h1 className='w-full text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-orange-100 mb-4 2xl:mb-6'>
                    Hello im Marcus, a web developer
                </h1>
                <p className='md:w-max self-start text-sm md:text-base text-orange-900 font-bold'>
                    Stockholm | Sweden | React | Node | UX | Typescript
                </p>
            </div>
            <div className='bg-orange-200 p-4 sm:p-10 col-span-2 sm:col-span-1 transition-all text-base text-orange-500 sm:hover:p-8 sm:hover:bg-orange-300'>
                <div className='w-full h-full relative'>
                    <Image
                        src='/maccan.jpeg'
                        layout='fill'
                        objectFit='cover'
                        alt='marcus headshot'
                    />
                </div>
            </div>
            <div className='sm:grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 hidden '>
                <div className='bg-orange-700'></div>
                <div className='bg-orange-800'></div>
                <div className='bg-orange-900'></div>
            </div>
        </section>
    )
}

export default Hero
