import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-wrap xl:mt-12 justify-center mt-10'>
            <div className="ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Programming</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </p>
            </div>
            <div className="ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frameworks & Libraries</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <ul>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Framer Motion</li>
                        <li>Material UI / Chakra UI</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
            <div className="ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Other Technical Skills</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>DBMS (MySQL & MongoDB)</li>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Postman</li>
                        <li>Notion</li>
                    </ul>
                </p>
            </div>
            <div className="ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financial Acumen</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <ul>
                        <li>Fundamental & Technical Analysis</li>
                        <li>Trading Strategies</li>
                        <li>Financial Modeling</li>
                    </ul>
                </p>
            </div>
            <div className="ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Areas of Interest</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <ul>
                        <li>Problem Solving</li>
                        <li>Software Development</li>
                        <li>DevOps</li>
                        <li>Investments</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Card