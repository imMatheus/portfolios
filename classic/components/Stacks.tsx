import React from 'react'
import Marked from './Marked'
import StackCard from './StackCard'

const Stacks: React.FC = ({}) => {
    return (
        <section className='min-h-screen w-screen bg-indigo-300 p-4 md:p-10'>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-black italic'>
                I guess you could say, I <Marked>Fullstack</Marked>
            </h2>
            <div className='grid grid-cols-4 gap-2 p-1.5 transition-all mt-5 md:mt-9 bg-black'>
                <div className='bg-yellow-400 text-yellow-800 col-span-3'>
                    <StackCard>Javascript</StackCard>
                </div>
                <div className='bg-green-400 text-green-800'>
                    <StackCard>Node.js</StackCard>
                </div>
                <div className='bg-lime-400 text-lime-800'>
                    <StackCard>Mongo DB</StackCard>
                </div>
                <div className='bg-red-400 text-red-800 col-span-2'>
                    <StackCard>HTML</StackCard>
                </div>
                <div className='bg-amber-400 text-amber-800'>
                    <StackCard>Firebase</StackCard>
                </div>
                <div className='bg-cyan-400 text-cyan-800'>
                    <StackCard>React</StackCard>
                </div>
                <div className='bg-teal-400 text-teal-800 col-span-3'>
                    <StackCard>Tailwind</StackCard>
                </div>
                <div className='bg-blue-400 text-blue-800 col-span-2'>
                    <StackCard>Typescript</StackCard>
                </div>
                <div className='bg-sky-400 text-sky-800 col-span-2'>
                    <StackCard>CSS</StackCard>
                </div>
            </div>
        </section>
    )
}

export default Stacks
