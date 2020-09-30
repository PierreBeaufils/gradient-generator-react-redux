// == Import npm
import { connect } from 'react-redux';
// == Composant de présentation
import NbColors from 'src/components/NbColors';

// Le but de cette fonction c'est de récupère un petit bout de state
// Puis le retourner afin que le composant en profite
const mapStateToProps = (state) => ({
  nbColors: state.nbColors,
}
);

const mapDispatchToProps = {};

const NbColorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NbColors);

export default NbColorsContainer;
