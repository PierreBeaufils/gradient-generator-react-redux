import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ changeDirection, direction, value }) => (
  <button
    type="button"
    className="button"
    onClick={() => {
      changeDirection(value);
    }}
  >
    {direction}
  </button>
);

Button.propTypes = {
  changeDirection: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
