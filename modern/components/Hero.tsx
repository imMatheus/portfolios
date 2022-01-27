import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = ({}) => {
    return (
        <section className='flex flex-col lg:flex-row space-y-4 justify-center items-center max-w-6xl mx-auto'>
            <div className='h-[22rem] sm:h-[30rem] lg:h-[38rem] aspect-[7/10] flex-shrink-0 lg:ml-5 bg-gray-100 relative'>
                <Image
                    src='/selfie.jpeg'
                    layout='fill'
                    alt='marcus headshot'
                    objectFit='cover'
                />
            </div>
            <div className='space-y-3 px-6 py-3'>
                <h1 className='text-2xl sm:text-3xl lg:text-5xl font-medium sm:font-semibold leading-6 sm:leading-8'>
                    Hi, my name is Matheus and im a Junior Web Developer
                </h1>
                <h3 className='text-xs md:text-sm text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos saepe aperiam officia soluta eos, aspernatur
                    quibusdam unde, optio similique sequi minus. Enim distinctio
                    voluptatem dicta ipsum natus omnis repellendus soluta.
                </h3>
                <div className='flex gap-2'>
                    <Link href='#contact' passHref={true}>
                        <a>
                            <Button variant='dark'>Contact me</Button>
                        </a>
                    </Link>
                    <Link href='#work' passHref={true}>
                        <a>
                            <Button variant='light'>Check my work</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
