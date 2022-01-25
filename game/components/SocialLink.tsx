import Link from 'next/link'
import React from 'react'
import { Icon as IconType } from 'react-feather'

interface SocialLinkProps {
    Icon: IconType
    href: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href }) => {
    return (
        <Link passHref={true} href={href}>
            <a className='w-10 h-10 md:w-12 md:h-12 rounded-full p-2.5 bg-black'>
                <Icon className='w-full h-full text-white' />
            </a>
        </Link>
    )
}

export default SocialLink
