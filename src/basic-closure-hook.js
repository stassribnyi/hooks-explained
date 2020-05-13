/**
 * useState function which uses closure to store inner state value and exposes only 2 methods:
 * state and setState for read and write inner state
 * @param {*} initialState
 */
export const useState = (initialState) => {
  let innerState = initialState;

  const state = () => innerState;
  const setState = (newState) => {
    innerState = newState;
  };

  return [state, setState];
};
