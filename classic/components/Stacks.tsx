import React from 'react'
import Marked from './Marked'
import StackCard from './StackCard'

const Stacks: React.FC = ({}) => {
    return (
        <section className='min-h-screen w-screen bg-indigo-400 p-4 md:p-10'>
            <h2 className='font-dm-serif text-3xl md:text-4xl lg:text-6xl font-black italic'>
                I guess you could say, I <Marked>Fullstack</Marked>
            </h2>
            <div className='grid grid-cols-3 gap-4 mt-5 md:mt-9'>
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />{' '}
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />{' '}
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />{' '}
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />{' '}
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />{' '}
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
                <StackCard
                    color='#330f44'
                    title='Node.js'
                    description='i know node cuz im built diff'
                />
            </div>
        </section>
    )
}

export default Stacks
