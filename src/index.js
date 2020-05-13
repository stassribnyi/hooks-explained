import { useState as useBasicUseState } from './basic-closure-hook.js';

const App = () => {
  const [basicCounter, setBasicCounter] = useBasicUseState(10);

  const refreshOutput = () =>
    (document.querySelector(
      '#basic-closure-hook > .counter'
    ).value = basicCounter());

  document
    .querySelector('#basic-closure-hook > .decrement')
    .addEventListener('click', () => {
      setBasicCounter(basicCounter() - 1);
      refreshOutput();
    });

  document
    .querySelector('#basic-closure-hook > .increment')
    .addEventListener('click', () => {
      setBasicCounter(basicCounter() + 1);
      refreshOutput();
    });

  refreshOutput();
};

App();
