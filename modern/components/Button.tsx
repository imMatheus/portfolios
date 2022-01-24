import React from 'react'
import styles from '../styles/Button.module.scss'
import { Icon as IconType } from 'react-feather'

interface ButtonProps {
    variant?: 'dark' | 'light' // variant for button
    text?: string
    Icon?: IconType
}

// default to dark, if non is given
const Button: React.FC<ButtonProps> = ({
    variant = 'dark',
    text,
    Icon,
    children,
}) => {
    return (
        <button className={styles[variant]}>
            {Icon && <Icon className='' />}
            {text || children}
        </button>
    )
}

export default Button
