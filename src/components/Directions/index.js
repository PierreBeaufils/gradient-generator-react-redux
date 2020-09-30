import React from 'react';
import DirectionButton from 'src/containers/DirectionButton';

const Directions = () => (
  <div className="buttons group degrees-buttons">
    <DirectionButton direction="45°" value="45deg" />
    <DirectionButton direction="90°" value="90deg" />
    <DirectionButton direction="135°" value="135deg" />
    <DirectionButton direction="225°" value="225deg" />
    <DirectionButton direction="315°" value="315deg" />
  </div>
);

export default Directions;
