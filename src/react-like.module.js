export const ReactLike = (() => {
  let innerState = null;
  let innerDeps = [];

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
    useEffect(callback, deps) {
      if (!Array.isArray(deps)) {
        throw new Error('deps must be an array');
      }

      const hasDeps = deps.length > 0;
      const hasChanges =
        deps.length !== innerDeps.length ||
        deps.some((dependency) => !innerDeps.includes(dependency));

      if (!hasDeps || hasChanges) {
        callback();
        innerDeps = deps;
      }
    },
  };
})();
