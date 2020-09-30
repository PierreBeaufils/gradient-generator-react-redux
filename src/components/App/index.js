// == Import npm
import React from 'react';

// == Import
import NbColorsContainer from 'src/containers/NbColors';
import ConstrolsContainer from 'src/containers/Controls';
import GradientContainer from 'src/containers/Gradient';
import Directions from 'src/components/Directions';

// == Composant
const App = () => (
  <div className="app">
    <NbColorsContainer />
    <ConstrolsContainer />
    <GradientContainer />
    <Directions />
  </div>
);
// == Export
export default App;
