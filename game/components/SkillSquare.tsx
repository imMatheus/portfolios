import React from 'react'

interface SkillSquareProps {}

const SkillSquare: React.FC<SkillSquareProps> = ({ children }) => {
    return (
        <div className='flex justify-center items-center w-full h-full overflow-hidden'>
            <h3 className='text-lg md:text-3xl font-piazzolla p-2 md:p-4 font-semibold text-center break-all text-overflow-hidden '>
                {children}
            </h3>
        </div>
    )
}

export default SkillSquare
