import React from 'react';
import './InfiniteScrollAnimation.css'
import { styles } from '../styles';


// const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['React.js', 'JavaScript', 'TailWind CSS', 'MERN Stack Web Development', 'MongoDB', 'Node JS', 'Express', 'Python', 'Machine Learning', 'Java', 'Data Structures and Algorithms'];


const DURATION = 55000;
const ROWS = 5;
const TAGS_PER_ROW = 12;


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className='loop-slider' style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'>
    {/* <span>#</span> */}
    {text}
  </div>
);



export default function InfiniteScrollAnimation() {
  return (
    <div className='app'>
      <header>
        <h2 className={`${styles.sectionHeadText}`}>My Tech Stack</h2>
        {/* <h2 className={`${styles.sectionHeadText} `}>Projects</h2> */}
        <p className={`${styles.sectionSubText} `}>Constantly learning new skills!</p>
      </header>
      <div className='tag-list'>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
              <Tag text={tag} key={tag} />
            ))}
          </InfiniteLoopSlider>
        ))}
        <div className='fade' />
      </div>
    </div>
  );
}
