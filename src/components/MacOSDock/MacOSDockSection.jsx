import React from 'react';
import Section from '../templates/Section.jsx';
import Dock from './DockComponents/Dock.jsx';

function MacOSDockSection() {
  return (
    <Section color={'bg-macOSBg'} align={'items-end'}>
      <div className="flex flex-col w-full items-center justify-end">
        <div className="p-48 inline sm:hidden">
          <h1 className="font-spaceMono  text-xl w-60 text-center text-spotifyWhite">
            The below animation can be properly enjoyed on hovering with a mouse! This website is optimized for desktops and laptops. Please visit on a desktop or laptop for the best experience.
          </h1>
        </div>
        <Dock />
      </div>
    </Section>
  );
}

export default MacOSDockSection;
