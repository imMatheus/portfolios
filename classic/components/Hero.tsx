import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import Marked from './Marked'

const ProfileImage: React.FC = () => (
    <Image
        src='/maccan.jpeg'
        layout='fill'
        alt='marcus headshot'
        className='rounded-full overflow-hidden'
    />
)

const Hero: React.FC = ({}) => {
    return (
        <div className='flex flex-col md:flex-row-reverse justify-center py-36 md:h-screen items-center px-4 md:px-10 max-w-6xl mx-auto'>
            <div
                className='w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 relative flex-shrink-0 mb-5 md:mb-0 md:ml-8'
                id={styles.profileImages}
            >
                <div className={styles.image}>
                    <ProfileImage />
                </div>
                <div className={styles.image}>
                    <ProfileImage />
                </div>
                <div className={styles.image}>
                    <ProfileImage />
                </div>
            </div>
            <div className='text-3xl text-center sm:text-5xl lg:text-7xl font-black italic md:max-w-[25ch]'>
                <h1 className='mb-2'>
                    Hello! I&apos;m <Marked>Marcus</Marked>, a frontend engineer
                </h1>
                <p className='text-base md:text-lg'>
                    Stockholm | Sweden | React | Node | UX | Typescript
                </p>
            </div>
        </div>
    )
}

export default Hero
