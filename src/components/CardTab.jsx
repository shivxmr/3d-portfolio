import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const CardTab = () => {

    const data = [
        {
            label: "Programming Languages",
            value: "programming",
            items: ['TypeScript', 'JavaScript', 'Java', 'Python'],
        },
        {
            label: "Frameworks/Libraries",
            value: "frameworks",
            items: [
                'React JS',
                'Next JS',
                'Tailwind CSS',
                'Node JS',
                'Express',
                'Framer Motion',
                'Shadcn UI',
                'Material UI', 'Chakra UI', 'Bootstrap',
            ],
        },
        {
            label: "CS Fundamentals",
            value: "cs-fundamentals",
            items: [
                'Data Structures',
                'Algorithms',
                'Operating Systems',
                'DBMS (MySQL & MongoDB)',
                'Object Oriented Programming',
                'Computer Networks',
            ],
        },
        {
            label: "Version Control & Tools",
            value: "version-control",
            items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Notion'],
        },
        {
            label: "Financial Acumen",
            value: "financial",
            items: [
                'Fundamental Analysis',
                'Technical Analysis',
                'Trading Strategies',
                'Financial Modeling',
                'Investments',
            ],
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto mt-10 p-6 ">
            <Tabs value="programming" className='mt-10'>
                <TabsHeader className="flex flex-wrap justify-center">
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className='font-bold'>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    // animate={{
                    //     initial: { y: 250 },
                    //     mount: { y: 0 },
                    //     unmount: { y: 250 },
                    // }}
                    animate={{
                        initial: { opacity: 0, y: -250 },
                        mount: { opacity: 1, y: 0 },
                        unmount: { opacity: 0, y: 250 },
                    }}
                    className='mt-6 mb-6'

                >
                    {data.map(({ value, items }) => (
                        <TabPanel key={value} value={value} className='flex justify-center'>
                            {/* <ul>
                                {items.map((item, index) => (
                                    <li key={index} className='flex justify-center'>{item}</li>
                                ))}
                            </ul> */}

                            <div className='relative w-full px-4 mb-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-center'>
                                <style>
                                    {`
          .gradient-border {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            // background: linear-gradient(135deg, #b794f6, #81e6d9, #fbd38d, #f687b3, #a5b4fc, #90cdf4);
            background: linear-gradient(45deg, #8257e5, #ff7f50, #ffa500, #da70d6, #00ced1, #3cb371);
            background-size: 300% 300%;
            animation: gradient-border 3s ease infinite;
            border: 2px solid transparent; /* Hide default border */
            border-radius: 8px;
          }

          @keyframes gradient-border {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
 .glazing-strip {
            position: absolute;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border: 6px solid rgba(255, 255, 255, 0.5);
            border-radius: 10px;
            pointer-events: none;
            z-index: -1;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
            animation: pulsate 2s infinite;
          }

          @keyframes pulsate {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }

        `}
                                </style>
                                <div className='gradient-border glazing-strip rounded-lg'></div>
                                {/* <div className='glazing-strip'></div> */}

                                {/* <h5 className='mb-2 text-2xl font-bold text-black  dark:text-gray-900'>
                                    {heading}
                                </h5> */}
                                <p className=' text-white font-bold'>
                                    <ul>
                                        {items.map((item, index) => (
                                            <li key={index} className='flex justify-center py-1'>{item}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}

export default CardTab