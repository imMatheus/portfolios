import React from 'react'
import styles from '../styles/Projects.module.scss'
import Project from './Project'

const Projects: React.FC = ({}) => {
    return (
        <section className='w-screen relative h-screen'>
            <div className={styles.outer}>
                <div className={styles.wrapper}>
                    <Project
                        index={1}
                        image='/project1.jpg'
                        title='Interactive comments section'
                        description='This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but also a perfect project to build as a full-stack CRUD app!'
                    >
                        <span className='py-1 px-3 bg-cyan-300 text-sm text-cyan-900'>
                            React
                        </span>
                        <span className='py-1 px-3 bg-yellow-300 text-sm text-yellow-900'>
                            Javascript
                        </span>
                        <span className='py-1 px-3 bg-lime-300 text-sm text-lime-800'>
                            Mongo DB
                        </span>
                        <span className='py-1 px-3 bg-green-300 text-sm text-green-800'>
                            Node.js
                        </span>
                        <span className='py-1 px-3 bg-teal-300 text-sm text-teal-800'>
                            Tailwind
                        </span>
                    </Project>

                    <Project
                        index={2}
                        image='/project2.jpg'
                        title='Interactive comments section'
                        description='This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but also a perfect project to build as a full-stack CRUD app!'
                    >
                        <span className='py-1 px-3 bg-yellow-300 text-sm text-yellow-900'>
                            Javascript
                        </span>
                        <span className='py-1 px-3 bg-lime-300 text-sm text-lime-800'>
                            Mongo DB
                        </span>
                        <span className='py-1 px-3 bg-green-300 text-sm text-green-800'>
                            Node.js
                        </span>
                    </Project>
                    <Project
                        index={3}
                        image='/project3.jpg'
                        title='Interactive comments section'
                        description='This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but also a perfect project to build as a full-stack CRUD app!'
                    >
                        <span className='py-1 px-3 bg-cyan-300 text-sm text-cyan-900'>
                            React
                        </span>
                        <span className='py-1 px-3 bg-teal-300 text-sm text-teal-800'>
                            Tailwind
                        </span>
                    </Project>
                    <Project
                        index={4}
                        image='/project4.jpg'
                        title='Interactive comments section'
                        description='This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but also a perfect project to build as a full-stack CRUD app!'
                    >
                        <span className='py-1 px-3 bg-cyan-300 text-sm text-cyan-900'>
                            React
                        </span>
                        <span className='py-1 px-3 bg-lime-300 text-sm text-lime-800'>
                            Mongo DB
                        </span>
                        <span className='py-1 px-3 bg-green-300 text-sm text-green-800'>
                            Node.js
                        </span>
                        <span className='py-1 px-3 bg-teal-300 text-sm text-teal-800'>
                            Tailwind
                        </span>
                    </Project>
                </div>
            </div>
        </section>
    )
}

export default Projects
