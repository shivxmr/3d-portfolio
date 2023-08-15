import React from 'react';
import Section from '../templates/Section.jsx';
import Dock from './DockComponents/Dock.jsx';
import AnimatedText from '../AnimatedText/AnimatedText.jsx';
// import { SectionWrapper } from '../../hoc/index.js';

// function MacOSDockSection() {
//   return (
const MacOSDockSection = () => {
  return (
    <>
      <Section align={'items-end'}>
        <div className="flex flex-col w-full items-center">
          <div className="text-5xl mb-24 sm:mb-24 md:mb-36 lg:mb-40 xl:mb-48 2xl:mb-52">
            <AnimatedText
              text={'Social Profiles'}
            />
          </div>

          {/* For mobiles where this animation is not visible, please visit on a desktop or laptop for the best experience. */}
          {/* <div className="p-48 inline sm:hidden">
            <h1 className="font-spaceMono text-xl w-60 text-center text-spotifyWhite">
              <AnimatedText text={'Social Profiles'} />
            </h1>
          </div> */}

          <div className="mb-12">
            <Dock />
          </div>
        </div>
      </Section>
    </>
  );
}

export default MacOSDockSection;
