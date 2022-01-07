const {
  applyFnDisplayname,
  applyConstDisplayname,
  isObserver,
  isConstObserver,
  isFnObserver,
} = require('./utils');

/**
 * Auto Trans Displayname follow Compoents name
 *
 * @param babel
 */
module.exports = (babel) => {
  const t = babel.types;

  return {
    name: 'babel-plugin-add-react-mobx-observer-displayname',
    visitor: {
      CallExpression(path) {
        // find mobx observer Node
        if (!isObserver(path)) return;

        // Const
        //
        // ```jsx
        // const Comp123 = () => <span>{Comp123.displayName}</span>;
        //
        // Comp123 = observer(Comp123);
        // export { Comp123 };
        // ```
        //
        // To
        //
        //   ```tsx
        // const Comp123 = () => <span>Comp123</span>;
        //
        // Comp123 = observer(Comp123);
        // export { Comp123 };
        // ```
        if (isConstObserver(path, t)) {
          const compName = path.node.arguments[0].name;
          applyFnDisplayname(path, t, compName);
        }

        // Fn
        //
        // ```jsx
        // const Comp123 = observer(() => <span>{Comp123.displayName}</span>);
        // ```
        //
        // To
        //
        //   ```jsx
        // const Comp123 = observer(() => <span>Comp123</span>);
        // ```
        if (isFnObserver(path, t)) {
          const compName = path.parent.id.name;
          applyConstDisplayname(path, t, compName);
        }
      },
    },
  };
};
