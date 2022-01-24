import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home: NextPage = () => {
    return (
        <main className='selection:bg-theme/90 selection:text-white'>
            <Navbar />
            <Hero />
            <Work />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home
