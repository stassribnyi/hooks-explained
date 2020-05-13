export const Counter = (parentElement, value, onChange) => ({
  render() {
    const decrement = document.createElement('button');
    decrement.innerText = '-';
    decrement.addEventListener('click', () => onChange(value - 1));

    const increment = document.createElement('button');
    increment.innerText = '+';
    increment.addEventListener('click', () => onChange(value + 1));

    const counter = document.createElement('input');
    counter.value = value;
    counter.readOnly = true;

    parentElement.appendChild(decrement);
    parentElement.appendChild(counter);
    parentElement.appendChild(increment);
  },
  destroy() {
    parentElement.innerHTML = '';
  },
});
