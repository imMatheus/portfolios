import React from 'react'
import Project from './Project'

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
    return (
        <div className='bg-orange-600 relative pb-10 ' id='projects'>
            <h2 className='relative mb-6 text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-piazzolla font-bold pt-10 text-orange-100'>
                Projects
            </h2>
            <div className='relative w-full px-5 md:px-10 space-y-8 lg:space-y-14'>
                <div className='w-[1px] absolute bg-orange-900 h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                <Project
                    image='/project1.jpg'
                    title='Interactive comments section'
                    description="This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!"
                    demo='https://lucioocode.web.app/'
                    index={1}
                />
                <Project
                    image='/project2.jpg'
                    title='Tip calculator app'
                    description='This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!'
                    demo='https://lucioocode.web.app/'
                    index={2}
                    odd
                />
                <Project
                    image='/project3.jpg'
                    title='IP Address Tracker'
                    description="In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app."
                    demo='https://lucioocode.web.app/'
                    index={3}
                />
            </div>
        </div>
    )
}

export default Projects
