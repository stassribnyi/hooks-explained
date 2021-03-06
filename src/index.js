import { useState as useBasicUseState } from './basic-closure.hook.js';
import { Counter } from './counter.component.js';
import { ReactLike } from './react-like.module.js';

const useCounterHook = (initialValue) => {
  const [counter, setCounter] = ReactLike.useState(initialValue);
  const [isBiggerThenTen, setIsBiggerThenTen] = ReactLike.useState(false);

  ReactLike.useEffect(() => {
    console.log(`counter has changed: ${counter}`);

    setIsBiggerThenTen(counter > initialValue);
  }, [counter]);

  ReactLike.useEffect(() => {
    console.log(`counter is bigger then ${initialValue}: ${isBiggerThenTen}`);
  }, [isBiggerThenTen]);

  return { counter, setCounter };
};

const StatefulCounter = () => {
  const [counter, setCounter] = ReactLike.useState(10);
  const [isBiggerThenTen, setIsBiggerThenTen] = ReactLike.useState(false);

  ReactLike.useEffect(() => {
    console.log(`counter has changed: ${counter}`);

    setIsBiggerThenTen(counter > 10);
  }, [counter]);

  ReactLike.useEffect(() => {
    console.log(`counter is bigger then ten: ${isBiggerThenTen}`);

    setIsBiggerThenTen(counter > 10);
  }, [isBiggerThenTen]);

  const CounterComponent = Counter(document.getElementById('react-like-hook'));

  return {
    render() {
      return CounterComponent(counter, setCounter);
    },
  };
};

const StatefulCounterWithCustomHook = () => {
  const { counter, setCounter } = useCounterHook(14);

  const CounterComponent = Counter(
    document.getElementById('react-like-custom-hook')
  );

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
  let destroyAppComponents = null;

  setInterval(() => {
    if (destroyAppComponents) {
      destroyAppComponents.forEach((destroy) => destroy());
    }

    destroyAppComponents = ReactLike.render([
      StatefulCounter,
      StatefulCounterWithCustomHook,
    ]);
  }, 500);
};

const App = () => {
  renderBasicHookExample();
  renderReactLikeHookExample();
};

App();
