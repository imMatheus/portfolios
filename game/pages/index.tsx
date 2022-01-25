import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skill from '../components/Skill'

const Home: NextPage = () => {
    return (
        <main className='w-screen min-h-screen'>
            <Hero />
            <Skill />
            <Projects />
            <Footer />
        </main>
    )
}

export default Home
