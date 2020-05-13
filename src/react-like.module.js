export const ReactLike = (() => {
  const hooks = [];
  let currentHookIndex = 0;

  return {
    render(Component) {
      const instance = Component();

      currentHookIndex = 0;

      return instance.render();
    },
    useState(initialState) {
      hooks[currentHookIndex] = hooks[currentHookIndex] || initialState;

      const stateHookIndex = currentHookIndex;
      const setState = (newState) => {
        hooks[stateHookIndex] = newState;
      };

      return [hooks[currentHookIndex++], setState];
    },
    useEffect(callback, deps) {
      if (!Array.isArray(deps)) {
        throw new Error('deps must be an array');
      }

      const hasDeps = deps.length > 0;
      const currentDeps = hooks[currentHookIndex] || [];
      const hasChanges =
        deps.length !== currentDeps.length ||
        deps.some((dependency) => !currentDeps.includes(dependency));

      if (!hasDeps || hasChanges) {
        callback();
        hooks[currentHookIndex] = deps;
      }

      currentHookIndex++;
    },
  };
})();
