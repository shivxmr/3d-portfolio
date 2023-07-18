import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, color, align, justify }) {
  return (
    <section
      className={`${color} snap-center h-screen flex ${justify} ${align} p-0 shadow-2xl shadow-slate-600 overflow-hidden`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Section.defaultProps = {
  align: 'items-center',
  justify: 'justify-center',
};

export default Section;
