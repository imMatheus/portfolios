import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Stacks from '../components/Stacks'

const Home: NextPage = () => {
    return (
        <main className='bg-indigo-200 text-neutral-900 font-dm-serif'>
            <Hero />
            <Stacks />
            <Projects />
            <section className='h-screen bg-indigo-900'></section>
        </main>
    )
}

export default Home
