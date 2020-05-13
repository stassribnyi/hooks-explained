/**
 * Creates counter component
 * @param {*} parentElement Parent element content will be assigned to.
 * @returns Destroy callback
 */
export const Counter = (parentElement) => (value, onChange) => {
  const handleDecrement = () => onChange(value - 1);
  const handleIncrement = () => onChange(value + 1);

  const container = document.createElement('div');
  const decrement = document.createElement('button');
  const increment = document.createElement('button');
  const counter = document.createElement('input');

  decrement.innerText = '-';
  increment.innerText = '+';
  counter.value = value;
  counter.readOnly = true;

  increment.addEventListener('click', handleIncrement);
  decrement.addEventListener('click', handleDecrement);

  const itemsToRender = [decrement, , counter, increment];

  itemsToRender.forEach((item) => container.appendChild(item));
  parentElement.appendChild(container);

  return () => {
    decrement.removeEventListener('click', handleDecrement);
    increment.removeEventListener('click', handleIncrement);

    itemsToRender.forEach((item) => container.removeChild(item));
    parentElement.removeChild(container);
  };
};
