// == Imports
import { randomHexColor, generateSpanColor } from './utils';

// Store & actions import
import store from './store';
import {
  changeFirstColor,
  randomizeFirstColor,
  randomizeLastColor,
  changeDirection,
} from './actions';

// == Rendu dans le DOM
function renderNbColors() {
  const state = store.getState();
  const { nbColors } = state;

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Abonnement au store
// Pour chaque changement de valeur du state du store,
// on va déclencher les fonctions qui sont abonnées à ce store
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch(randomizeFirstColor());
    store.dispatch(randomizeLastColor());
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(changeFirstColor(randomHexColor()));
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(randomizeLastColor());
  });

document.getElementById('45deg')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('45deg'));
  });

document.getElementById('135deg')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('135deg'));
  });

document.getElementById('225deg')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('225deg'));
  });

document.getElementById('315deg')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('315deg'));
  });
