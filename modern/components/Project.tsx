import React from 'react'
import Image from 'next/image'
import { ExternalLink, GitHub } from 'react-feather'
import Link from 'next/link'
import Button from './Button'
interface ProjectProps {
    img: string
    title: string
    chips: string[]
    description: string
    link: string
    repo: string
}

const Project: React.FC<ProjectProps> = ({
    img,
    chips,
    description,
    title,
    link,
    repo,
}) => {
    return (
        <div className='bg-red-40 relative flex flex-col'>
            <Link passHref={true} href={link}>
                <a>
                    <div className='bg-gray-100 rounded-lg py-3 mb-2 relative'>
                        <div className='w-full max-w-xs mx-auto aspect-video bg-gray-200 relative'>
                            <Image
                                src={img}
                                layout='fill'
                                alt='marcus headshot'
                                objectFit='cover'
                            />
                        </div>
                        <div className='cursor-pointer absolute inset-0 bg-white/80 opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center text-theme'>
                            Preview <ExternalLink className='w-5 h-5 ml-1.5' />
                        </div>
                    </div>
                </a>
            </Link>

            <h3 className='font-semibold text-2xl'>{title}</h3>
            {chips && (
                <div className='flex flex-wrap my-2.5 gap-2'>
                    {chips.map((chip) => (
                        <div
                            className='rounded-full bg-gray-200 py-1 px-2.5 text-xs'
                            key={chip}
                        >
                            {chip}
                        </div>
                    ))}
                </div>
            )}
            <p className='text-xs sm:text-sm text-gray-600 mb-2'>
                {description}
            </p>
            <div className='mt-auto'>
                <Link passHref={true} href={repo}>
                    <a>
                        <Button Icon={GitHub}>Repo</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Project
