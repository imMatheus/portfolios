import React from 'react'

interface StackCardProps {}

const StackCard: React.FC<StackCardProps> = ({ children }) => {
    return (
        <h4 className='text-center px-1 py-4 lg:px-6 lg:py-6 font-medium font-dm-serif text-lg lg:text-3xl h-full flex items-center justify-center'>
            {children}
        </h4>
    )
}

export default StackCard
