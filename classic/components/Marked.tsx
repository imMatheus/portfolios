import React from 'react'
import styles from '../styles/Marked.module.scss'

// could use the text prop or the children to show the text
interface MarkedProps {
    text?: string
    dark?: boolean
}

const Marked: React.FC<MarkedProps> = ({ text, dark = false, children }) => {
    return (
        <span
            className={dark ? styles.markedWrapperDarked : styles.markedWrapper}
        >
            <span
                className={dark ? styles.markedInnerDarked : styles.markedInner}
            >
                {text || children}
            </span>
        </span>
    )
}

export default Marked
