import React from 'react'
import { GitHub, Instagram, Linkedin } from 'react-feather'
import SocialLink from './SocialLink'

const Navbar: React.FC = ({}) => {
    return (
        <nav className='flex p-6 md:px-9 mb-3 sticky top-0 z-50'>
            <h2 className='font-mono font-bold text-4xl'>MM</h2>
            <div className='ml-auto flex items-center gap-3'>
                <SocialLink href='#' Icon={GitHub} />
                <SocialLink href='#' Icon={Instagram} />
                <SocialLink href='#' Icon={Linkedin} />
            </div>
        </nav>
    )
}

export default Navbar
