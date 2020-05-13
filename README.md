# React Hooks explained

Here is my work through the article explaining how react hooks works. [Original Article](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)

> **Short summary:** basically, hooks are just closures which contains its local state and exposes readonly value and its setter.

Actual implementation of hooks are a little bit more complex, it uses some kind of module to persist state between renders.

Additional articles:

- [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
- [Getting Closure on Hooks (JSConf Edition)](https://www.swyx.io/speaking/react-hooks/)
- [JS implementation of hooks](https://github.com/getify/TNG-Hooks)
- [Why React is -NOT- Reactive](https://www.swyx.io/speaking/react-not-reactive/)

## Run

To run this app locally, please follow steps below:

```bash
npx light-server -s . -p 3000
```

Then open http://localhost:3000/ to see the app.
