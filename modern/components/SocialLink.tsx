import React from 'react'
import { Icon as IconType } from 'react-feather'
import Link from 'next/link'

interface SocialLinkProps {
    Icon: IconType
    href: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href }) => {
    return (
        <Link passHref={true} href={href}>
            <a>
                <Icon className='w-6 h-6 cursor-pointer' />
            </a>
        </Link>
    )
}

export default SocialLink
