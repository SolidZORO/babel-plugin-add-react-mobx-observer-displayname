# babel-plugin-add-react-mobx-observer-displayname

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

Automatically add a `displayName` property to your `mobx observer`'s React Components.


## Transform

- ### `Function` observer

  ```jsx
  const Comp123 = observer(() => <span>{Comp123.displayName}</span>);
  ```

  To

  ```jsx
  const Comp123 = observer(() => <span>Comp123</span>);
  ```

- ### `Const` observer

  ```jsx
  const Comp123 = () => <span>{Comp123.displayName}</span>;
  
  Comp123 = observer(Comp123);
  export { Comp123 };
  ```

  To

  ```tsx
  const Comp123 = () => <span>Comp123</span>;
  
  Comp123 = observer(Comp123);
  export { Comp123 };
  ```


## Installation

```sh
yarn add -D babel-plugin-add-react-mobx-observer-displayname
```


## Usage

```js
// .babel.config.js
module.exports = {
  plugins: [
    ['add-react-mobx-observer-displayname'],
    //
    // maybe you also need these like me.
    // ['add-react-displayname'], // for `normal` React Comp
    // ['@prisma-capacity/babel-plugin-react-display-name'], // for `forwardRef` and `memo`
  ]
}
```

## Related

- [babel-plugin-add-react-displayname](https://github.com/opbeat/babel-plugin-add-react-displayname) (for `normal` React Comp)
- [babel-plugin-react-display-name](https://github.com/prisma-capacity/babel-plugin-react-display-name) (for `forwardRef` and `memo`)


## Thanks

Thank you very much [@meyer](https://github.com/meyer), for a babel rookie, without his [babel-plugin-react-observer-displayname](https://github.com/meyer/babel-plugin-react-observer-displayname), I can't write this plugin.


## License

MIT © [Jason Feng][author-url]

<!-- badges -->

[author-url]: https://github.com/SolidZORO


[mit-img]: https://img.shields.io/npm/l/babel-plugin-add-react-mobx-observer-displayname.svg?style=flat&colorA=000000&colorB=000000

[mit-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/babel-plugin-add-react-mobx-observer-displayname?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/babel-plugin-add-react-mobx-observer-displayname


[size-img]: https://img.shields.io/bundlephobia/minzip/babel-plugin-add-react-mobx-observer-displayname?label=bundle&style=flat&colorA=000000&colorB=000000

[size-url]: https://www.npmjs.com/package/babel-plugin-add-react-mobx-observer-displayname


[download-img]: https://img.shields.io/npm/dt/babel-plugin-add-react-mobx-observer-displayname.svg?style=flat&colorA=000000&colorB=000000

[download-url]: https://www.npmjs.com/package/babel-plugin-add-react-mobx-observer-displayname


[build-img]: https://github.com/SolidZORO/babel-plugin-add-react-mobx-observer-displayname/workflows/badge.svg

[build-url]: https://github.com/SolidZORO/babel-plugin-add-react-mobx-observer-displayname/actions
