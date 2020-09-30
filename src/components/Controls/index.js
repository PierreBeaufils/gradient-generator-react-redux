import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ randomizeFirstColor, randomizeLastColor, randomizeAllColor }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button"
      id="randFirst"
      onClick={randomizeFirstColor}
    >
      Random First
    </button>
    <button
      type="button"
      className="button"
      id="randAll"
      onClick={randomizeAllColor}
    >
      Random All
    </button>
    <button
      type="button"
      className="button"
      id="randLast"
      onClick={randomizeLastColor}
    >
      Random Last
    </button>
  </div>
);

Controls.propTypes = {
  randomizeFirstColor: PropTypes.func.isRequired,
  randomizeLastColor: PropTypes.func.isRequired,
  randomizeAllColor: PropTypes.func.isRequired,
};

export default Controls;
