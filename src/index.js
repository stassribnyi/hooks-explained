import { useState as useBasicUseState } from './basic-closure.hook.js';
import { Counter } from './counter.component.js';
import { ReactLike } from './react-like.module.js';

const StatefulCounter = () => {
  const [counter, setCounter] = ReactLike.useState(10);

  const CounterComponent = Counter(document.getElementById('react-like-hook'));

  return {
    render() {
      return CounterComponent(counter, setCounter);
    },
  };
};

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

const renderReactLikeHookExample = () => {
  let destroyApp = null;
  setInterval(() => {
    if (destroyApp) {
      destroyApp();
    }

    destroyApp = ReactLike.render(StatefulCounter);
  }, 200);
};

const App = () => {
  renderBasicHookExample();
  renderReactLikeHookExample();
};

App();
