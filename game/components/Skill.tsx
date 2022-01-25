import React from 'react'
import SkillSquare from './SkillSquare'

const Skill: React.FC = ({}) => {
    return (
        <section className='flex bg-orange-50 flex-col lg:flex-row' id='skills'>
            <div className='flex-1 p-6 md:p-10'>
                <div className='max-w-3xl font-piazzolla'>
                    <h2 className='text-3xl sm:text-3x lg:text-5xl font-bold mb-3 md:mb-5'>
                        Experience
                    </h2>
                    <p className='text-sm sm:text-base text-gray-600 mb-5 md:mb-12'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quae repudiandae voluptatibus animi veniam aliquid
                        aperiam ea enim sed? Dolorem, unde provident, cupiditate
                        quis repudiandae eius, numquam necessitatibus autem ex
                        aperiam consequatur consectetur amet. Iusto vero, ipsum
                        voluptas voluptate. Blanditiis maxime quasi alias
                        recusandae itaque,
                    </p>
                    <h2 className='text-2xl lg:text-3xl font-bold mb-1'>
                        Work
                    </h2>
                    <p className='text-sm sm:text-base text-black'>
                        <span className='font-black'>2014 - 2017</span> Spotify:
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Tempore soluta hic velit voluptatem!
                    </p>
                    <p className='text-sm sm:text-base text-black'>
                        <span className='font-black'>2017 - 2022</span> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, expedita illo esse aliquam tenetur qui numquam
                        voluptate nobis, cum fugit vel modi ipsum.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-[700px] 2xl:w-[800px] aspect-square lg:aspect-[4/3] flex-shrink-0 grid grid-cols-3 lg:grid-cols-4 grid-rows-3'>
                <div className='transition-colors hover:bg-teal-400 bg-teal-300 text-teal-800 lg:row-span-3 lg:[writing-mode:_vertical-rl]'>
                    <SkillSquare>Tailwind</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-yellow-400 bg-yellow-300 text-yellow-800'>
                    <SkillSquare>Javascript</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-lime-400 bg-lime-300 text-lime-800'>
                    <SkillSquare>Mongo DB</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-cyan-400 bg-cyan-300 text-cyan-900'>
                    <SkillSquare>React</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-blue-400 bg-blue-300 text-blue-800 lg:col-span-2'>
                    <SkillSquare>Typescript</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-green-400 bg-green-300 text-green-800'>
                    <SkillSquare>Node.js</SkillSquare>
                </div>

                <div className='transition-colors hover:bg-sky-400 bg-sky-300 text-sky-800'>
                    <SkillSquare>CSS</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-red-400 bg-red-300 text-red-800'>
                    <SkillSquare>HTML</SkillSquare>
                </div>
                <div className='transition-colors hover:bg-amber-400 bg-amber-300 text-amber-800'>
                    <SkillSquare>Firebase</SkillSquare>
                </div>
            </div>
        </section>
    )
}

export default Skill

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
// import { Pie } from 'react-chartjs-2'

// ChartJS.register(ArcElement, Tooltip)

// const skills: { name: string; points: number; color: string }[] = [
//     {
//         name: 'firebase',
//         points: 100,
//         color: '#f5820d',
//     },
//     {
//         name: 'react',
//         points: 100,
//         color: '#61dbfb',
//     },
//     {
//         name: 'javascript',
//         points: 100,
//         color: '#f0db4f',
//     },
//     {
//         name: 'typescript',
//         points: 100,
//         color: '#007acc',
//     },
//     {
//         name: 'node',
//         points: 100,
//         color: '#22ff99',
//     },
//     {
//         name: 'css',
//         points: 100,
//         color: '#2965f1',
//     },
//     {
//         name: 'html',
//         points: 100,
//         color: '#e34c26',
//     },
//     {
//         name: 'mongodb',
//         points: 100,
//         color: '#3fa037',
//     },
// ]

{
    /* <Pie
    className='overflow-auto p-4'
    // datasetIdKey='id'
    data={{
        labels: skills.map((skill) => skill.name),
        datasets: [
            {
                label: 'My First Dataset',
                data: skills.map((skill) => skill.points),
                backgroundColor: skills.map(
                    (skill) => skill.color + 'ff'
                ),

                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    }}
/> */
}
