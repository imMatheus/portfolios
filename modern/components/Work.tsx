import React from 'react'
import Chip from './Chip'
import Project from './Project'

const Work: React.FC = ({}) => {
    return (
        <section className='my-16 px-4 sm:px-4 md:px-8' id='work'>
            <h2 className='text-center text-3xl md:text-5xl font-bold mb-3'>
                Work
            </h2>
            <p className='text-center text-gray-500 max-w-4xl text-xs md:text-sm mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                molestias cumque quis, ipsa quo quos mollitia eligendi deleniti
                vero necessitatibus ducimus dolores accusamus, suscipit aut!
            </p>
            <div className='flex gap-2 my-3 flex-wrap justify-center'>
                <Chip text='react' color='#61dbfb' />
                <Chip text='firebase' color='#f5820d' />
                <Chip text='npm' color='#cc3534' />
                {/* <Chip text='mongo' color='#4db33d' /> */}
                <Chip text='mongo' color='#3fa037' />
                <Chip text='javascript' color='#f0db4f' />
                <Chip text='typescript' color='#007acc' />
                <Chip text='html' color='#e34c26' />
                {/* <Chip text='css' color='#264de4' /> */}
                <Chip text='css' color='#2965f1' />
            </div>
            <div className='grid grid-cols-1 space-y-4 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-y-11 sm:gap-x-7 max-w-6xl mx-auto my-5'>
                <Project
                    img='/project1.jpg'
                    title='Interactive comments section'
                    chips={['node', 'firebase']}
                    description="This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!"
                    link='https://lucioocode.web.app/'
                    repo='https://github.com/imMatheus/lucio/tree/mongodb'
                />
                <Project
                    img='/project2.jpg'
                    title='Tip calculator app'
                    chips={['html', 'css', 'javascript']}
                    description='This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!'
                    link='https://lucioocode.web.app/'
                    repo='https://github.com/imMatheus/lucio/tree/mongodb'
                />
                <Project
                    img='/project3.jpg'
                    title='IP Address Tracker'
                    chips={['html', 'css', 'javascript', 'api']}
                    description="In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app."
                    link='https://lucioocode.web.app/'
                    repo='https://github.com/imMatheus/lucio/tree/mongodb'
                />
                <Project
                    img='/project4.jpg'
                    title='REST Countries API with color theme switcher'
                    chips={[
                        'firebase',
                        'react',
                        'tailwind',
                        'javascript',
                        'api',
                    ]}
                    description="If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API."
                    link='https://lucioocode.web.app/'
                    repo='https://github.com/imMatheus/lucio/tree/mongodb'
                />
                <Project
                    img='/project5.jpg'
                    title='NFT preview card component'
                    chips={['firebase', 'react', 'tailwind']}
                    description='This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.'
                    link='https://lucioocode.web.app/'
                    repo='https://github.com/imMatheus/lucio/tree/mongodb'
                />
            </div>
        </section>
    )
}

export default Work
