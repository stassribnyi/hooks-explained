export const ReactLike = (() => {
  let innerState = null;

  return {
    render(Component) {
      const instance = Component();

      return instance.render();
    },
    useState(initialState) {
      innerState = innerState || initialState;

      const setState = (newState) => {
        innerState = newState;
      };

      return [innerState, setState];
    },
  };
})();
