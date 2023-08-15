import React from 'react';
import Section from '../../components/templates/Section';
import Mobile from '../../components/templates/Mobile';
import BoxStack from './BoxStackComponents/BoxStack.jsx';

export default function BoxStackSection() {
  return (
    // <Section color="bg-[#ff7a00]">
    <Section color="bg-[#050816]">
      <Mobile
        // color="bg-[#ff7a00]"
        // color="bg-[#050816]"
        color="bg-black"
        align="items-center"
        justify="justify-center"
      >
        <BoxStack />
      </Mobile>
    </Section>
  );
}
