import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Stacks from '../components/Stacks'
import styles from '../styles/Slides.module.scss'
const Home: NextPage = () => {
    return (
        <main className='bg-indigo-200 text-neutral-900'>
            <Hero />
            <Stacks />
            <section>
                <div className={styles.slide}></div>
            </section>
        </main>
    )
}

export default Home
