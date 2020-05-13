import { useState as useBasicUseState } from './basic-closure.hook.js';
import { Counter } from './counter.component.js';

const App = () => {
  const [basicCounter, setBasicCounter] = useBasicUseState(10);

  const BasicCounter = (value, onChange) =>
    Counter(document.getElementById('basic-closure-hook'), value, onChange);

  const basicCounterRenderer = () => {
    const instance = BasicCounter(basicCounter(), (newCounter) => {
      setBasicCounter(newCounter);
      instance.destroy();
      basicCounterRenderer();
    });

    instance.render();
  };

  basicCounterRenderer();
};

App();
