import React from 'react'

interface ChipProps {
    text?: string
    color: string
}

const Chip: React.FC<ChipProps> = ({ text, color, children }) => {
    return (
        <div
            className={`rounded-full text-xs sm:text-sm border py-1 px-3`}
            style={{ borderColor: color }}
            // style={{ borderColor: color, background: color }}
        >
            {text || children}
        </div>
    )
}

export default Chip
