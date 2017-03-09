# WindowState

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]


In an idea taken from [react-virtualized](https://github.com/bvaughn/react-virtualized), all of the `scroll` events are handled by **ONE** listener.

_Each instance of the component does have a resize listener_

```jsx
<WindowState>
  ({ scrollTop, winHeight, winWidth }) => {
    console.log(scrollTop)
    return (<div style={{ height: winHeight, width: winWidth }} />)
  }
</WindowState>
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/tkh44/window-state

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/window-state
