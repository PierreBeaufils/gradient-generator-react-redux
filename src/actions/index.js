export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR';
export const RANDOMIZE_LAST_COLOR = 'RANDOMIZE_LAST_COLOR';
export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// Action creators
export const randomizeFirstColor = () => ({ type: RANDOMIZE_FIRST_COLOR });
export const randomizeLastColor = () => ({ type: RANDOMIZE_LAST_COLOR });
export const changeFirstColor = (color) => ({ type: CHANGE_FIRST_COLOR, color });
export const changeDirection = (direction) => ({ type: CHANGE_DIRECTION, direction });
