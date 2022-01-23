import React from 'react'
import styles from '../styles/Marked.module.scss'

// could use the text prop or the children to show the text
interface MarkedProps {
    text?: string
}

const Marked: React.FC<MarkedProps> = ({ text, children }) => {
    return (
        <span className={styles.markedWrapper}>
            <span className={styles.markedInner}>{text || children}</span>
        </span>
    )
}

export default Marked
