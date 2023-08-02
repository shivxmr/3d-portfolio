import React from 'react';

const Card = () => {
    return (
        <div className='flex flex-wrap xl:mt-12 justify-center mt-10'>
            <CardItem
                heading='Programming'
                items={['TypeScript', 'JavaScript', 'Java', 'Python', 'HTML', 'CSS']}
            />
            <CardItem
                heading='Frameworks & Libraries'
                items={[
                    'Next JS',
                    'React JS',
                    'Tailwind CSS',
                    'Node.js',
                    'Express',
                    'Shadcn UI',
                    'Framer Motion',
                    'Material UI / Chakra UI / Bootstrap ',
                ]}
            />
            <CardItem
                heading='Other Technical Skills'
                items={[
                    'Data Structures',
                    'Algorithms',
                    'Git',
                    'GitHub',
                    'Postman',
                    'Notion',
                ]}
            />
            <CardItem
                heading='CS Subjects'
                items={[
                    'DBMS (MySQL & MongoDB)',
                    'Object-Oriented Programming (OOP)',
                    'Operating Systems',
                    'Computer Networks',
                ]}
            />
            <CardItem
                heading='Financial Acumen'
                items={[
                    'Fundamental & Technical Analysis',
                    'Trading Strategies',
                    'Financial Modeling',
                ]}
            />
            <CardItem
                heading='Areas of Interest'
                items={['Problem Solving', 'Software Development', 'DevOps', 'Investments']}
            />
        </div>
    );
};

const CardItem = ({ heading, items }) => {
    return (
        <div className='relative ml-3 mr-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto px-2 mb-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
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

            <h5 className='mb-2 text-2xl font-bold  text-white dark:text-gray-900'>
                {heading}
            </h5>
            <p className='font-normal text-white dark:text-gray-800'>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
};

export default Card;