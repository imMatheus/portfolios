import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectProps {
    image: string
    title: string
    description: string
    demo?: string
    repo?: string
    odd?: boolean
    index: number
}

const Project: React.FC<ProjectProps> = ({
    image,
    title,
    description,
    demo,
    repo,
    odd,
    index,
}) => {
    return (
        <div className='group w-full max-w-5xl h-60 md:h-72 lg:h-96 relative bg-orange-700 mx-auto xl:even:translate-x-18 xl:odd:-translate-x-18 2xl:even:translate-x-24 2xl:odd:-translate-x-24'>
            <div className='overflow-hidden w-full h-full'>
                <div className='w-full h-full relative group-hover:scale-105 transition-transform'>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        alt='marcus headshot'
                    />
                    <div className='absolute inset-0 bg-neutral-800/60'></div>
                </div>
            </div>
            <div
                className={`absolute inset-0 p-4 md:p-6 lg:p-10 flex justify-end flex-col ${
                    odd ? 'items-end' : ''
                }`}
            >
                <h2 className='text-2xl lg:text-4xl font-piazzolla text-orange-100 font-black'>
                    {title}
                </h2>
                <p
                    className={`text-sm text-orange-50 font-piazzolla ${
                        odd ? 'text-right' : 'text-left'
                    }`}
                >
                    {description}
                </p>
                {demo && (
                    <Link href={demo} passHref={true}>
                        <button className='mt-3 w-max py-3 px-5 tracking-widest text-sm font-piazzolla font-semibold cursor-pointer bg-black hover:bg-orange-600 transition-colors text-white'>
                            Live demo
                        </button>
                    </Link>
                )}
            </div>
            <div
                className={`hidden lg:block absolute z-10 -top-12 ${
                    odd ? '-left-12' : '-right-12'
                }`}
            >
                <h3 className='text-9xl font-piazzolla font-black text-orange-100'>
                    0{index}
                </h3>
            </div>
        </div>
    )
}

export default Project
