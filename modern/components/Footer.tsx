import React from 'react'
import Image from 'next/image'
import { GitHub, Instagram, Linkedin } from 'react-feather'
import SocialLink from './SocialLink'

const Footer: React.FC = ({}) => {
    return (
        <footer className='bg-gray-900 p-4 md:p-8 text-white'>
            <div className='flex flex-col md:flex-row-reverse justify-center py-3 items-center px-4 md:px-10 mx-auto'>
                <div className='cursor-pointer w-40 h-40 md:w-56 md:h-56 relative flex-shrink-0 mb-1 md:mb-0 md:ml-8'>
                    <Image
                        src='/maccan.jpeg'
                        layout='fill'
                        alt='marcus headshot'
                        className='rounded-full overflow-hidden'
                    />
                </div>
                <div className='md:max-w-[25ch] text-lg sm:text-xl lg:text-3xl'>
                    <h1 className='font-dm-serif font-extrabold italic text-center mb-2'>
                        Find me online!
                    </h1>
                    <div className='flex items-center gap-3'>
                        <SocialLink href='#' Icon={GitHub} />
                        <SocialLink href='#' Icon={Instagram} />
                        <SocialLink href='#' Icon={Linkedin} />
                    </div>
                </div>
            </div>
            <h4 className='text-center font-extralight text-sm'>
                &copy; 2022 - Matheus Mendes{' '}
            </h4>
        </footer>
    )
}

export default Footer
