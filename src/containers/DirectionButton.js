import { connect } from 'react-redux';
import Directions from 'src/components/Directions/Button';
import { changeDirection } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  changeDirection: (direction) => {
    dispatch(changeDirection(direction));
  },
});

const DirectionButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Directions);

export default DirectionButton;
