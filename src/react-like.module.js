export const ReactLike = (() => {
  const hooks = [];
  let currentHookIndex = 0;

  return {
    render(Component) {
      const instance = Array.isArray(Component)
        ? Component.map((item) => item())
        : Component();

      currentHookIndex = 0;

      return Array.isArray(instance)
        ? instance.map((item) => item.render())
        : instance.render();
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
