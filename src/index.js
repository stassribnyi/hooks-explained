import { useState as useBasicUseState } from './basic-closure.hook.js';
import { Counter } from './counter.component.js';

const renderBasicHookExample = () => {
  const [basicCounter, setBasicCounter] = useBasicUseState(10);

  const CounterComponent = Counter(
    document.getElementById('basic-closure-hook')
  );

  const createCounterComponent = () => {
    const destroy = CounterComponent(basicCounter(), (newCounter) => {
      setBasicCounter(newCounter);
      destroy();
      createCounterComponent();
    });
  };

  createCounterComponent();
};

const App = () => {
  renderBasicHookExample();
};

App();
