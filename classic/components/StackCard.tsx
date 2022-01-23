import React from 'react'

interface StackCardProps {
    color: string
    title: string
    description: string
}

const StackCard: React.FC<StackCardProps> = ({ color, title, description }) => {
    return (
        <div className='shadow cursor-pointer transition-shadow p-4 flex items-center rounded-lg'>
            <div
                className='flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full mr-2'
                style={{ backgroundColor: color }}
            ></div>
            <div>
                <h4 className='font-thin font-inter text-lg'>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default StackCard
