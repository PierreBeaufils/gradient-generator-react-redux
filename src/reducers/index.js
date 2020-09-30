/* eslint-disable max-len */
import { randomHexColor } from '../utils';
import {
  RANDOMIZE_FIRST_COLOR,
  RANDOMIZE_LAST_COLOR,
  CHANGE_FIRST_COLOR,
  CHANGE_DIRECTION,
} from '../actions';

// == State
const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case RANDOMIZE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: randomHexColor(),
      };
    case RANDOMIZE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: randomHexColor(),
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };
    case CHANGE_DIRECTION:
      return { ...state, direction: action.direction };
    default:
      return state;
  }
}
