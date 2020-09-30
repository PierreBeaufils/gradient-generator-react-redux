import { connect } from 'react-redux';
import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

const mapDispatchToProps = {};

const GradientContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gradient);

export default GradientContainer;
