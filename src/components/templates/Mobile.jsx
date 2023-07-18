import React from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ children, color, align, justify }) {
  return (
    <div
      className={`${color} flex ${align} ${justify} z-10 shadow-2xl shadow-slate-800 overflow-hidden h-full w-full rounded-none sm:border-mobileBorderWidth sm:h-mobileHeight sm:w-mobileWidth sm:rounded-mobileRound`}
    >
      {children}
    </div>
  );
}

Mobile.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Mobile.defaultProps = {
  align: 'items-start',
  justify: 'justify-normal',
};
