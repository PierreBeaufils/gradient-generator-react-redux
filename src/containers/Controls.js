import { connect } from 'react-redux';
import Controls from 'src/components/Controls';
import { randomizeFirstColor, randomizeLastColor } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  randomizeFirstColor: () => {
    dispatch(randomizeFirstColor());
  },
  randomizeLastColor: () => {
    dispatch(randomizeLastColor());
  },
  randomizeAllColor: () => {
    dispatch(randomizeFirstColor());
    dispatch(randomizeLastColor());
  },
});

const ConstrolsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);

export default ConstrolsContainer;
