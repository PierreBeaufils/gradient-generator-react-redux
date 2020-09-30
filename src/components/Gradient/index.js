import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({ firstColor, lastColor, direction }) => (
  <>
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      <span
        className="arrow"
        style={{
          transform: `rotate(${direction})`,
        }}
      >↑
      </span>
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  </>
);

Gradient.propTypes = {
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Gradient;
