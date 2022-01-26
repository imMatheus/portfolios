import Image from 'next/image'
import React from 'react'
import styles from '../styles/Projects.module.scss'
import Marked from './Marked'
import { GitHub, ExternalLink } from 'react-feather'

interface ProjectProps {
    index: number
    image: string
    title: string
    description: string
}

const Project: React.FC<ProjectProps> = ({
    index,
    image,
    title,
    description,
    children,
}) => {
    return (
        <div className={styles.slide}>
            <div className='w-full max-w-[2000px] mx-auto h-full p-5 md:p-10 flex flex-col'>
                <h2 className='font-black text-indigo-100 italic text-4xl md:text-6xl xl:text-8xl mb-5 md:mb-12'>
                    Project 0{index}
                </h2>
                <div className='lg:flex lg:justify-center lg:my-auto bg-indigo-900/0 pb-5'>
                    <div className='lg:h-full mb-3 lg:mb-0 flex items-center'>
                        <div className='relative w-full lg:h-80 xl:h-96 max-h-full aspect-video flex-shrink-0 bg-black/20'>
                            <Image
                                src={image}
                                layout='fill'
                                objectFit='cover'
                                alt='marcus headshot'
                            />
                            <div className='group absolute bg-black/0 hover:bg-black/40 transition-colors cursor-pointer inset-0 flex justify-center items-center'>
                                <p className='text-2xl underline text-indigo-50 font-sans opacity-0 group-hover:opacity-100'>
                                    Live demo
                                </p>
                                <ExternalLink className='ml-2 w-6 h-6 text-indigo-50 opacity-0 group-hover:opacity-100' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:pl-8 space-y-3 max-w-2xl flex flex-col h-full'>
                        <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-indigo-50'>
                            {title}
                        </h2>
                        <p className='text-sm md:text-base text-indigo-100'>
                            {description}
                        </p>
                        {children && (
                            <div>
                                <p className='text-sm md:text-lg font-bold mb-1'>
                                    <Marked dark={true}>Technologies</Marked>
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {children}
                                </div>
                            </div>
                        )}
                        <div className='h-full flex items-end'>
                            <div className='space-y-1'>
                                <p className='text-sm md:text-lg font-bold'>
                                    <Marked dark={true}>Links</Marked>
                                </p>
                                <div className='flex gap-2'>
                                    <button className='group bg-black flex items-center gap-1.5 font-sans font-light px-3 text-sm lg:text-base py-1 text-white hover:text-indigo-300 transition-colors'>
                                        Repository
                                        <GitHub className='text-white group-hover:text-indigo-300 w-4 h-4 transition-colors' />
                                    </button>
                                    <button className='group bg-black flex items-center gap-1.5 font-sans font-light px-3 text-sm lg:text-base py-1 text-white hover:text-indigo-300 transition-colors'>
                                        Live demo
                                        <ExternalLink className='text-white group-hover:text-indigo-300 w-4 h-4 transition-colors' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
