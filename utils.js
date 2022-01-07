const makeDevIfStatement = (t, body = []) =>
  t.ifStatement(
    // process.env.NODE_ENV === 'development'
    t.binaryExpression(
      '===',
      t.memberExpression(
        t.memberExpression(t.identifier('process'), t.identifier('env')),
        t.identifier('NODE_ENV'),
      ),
      t.stringLiteral('development'),
    ),
    t.blockStatement(body),
  );

const makeDisplayName = (t, compName, displayName) =>
  makeDevIfStatement(t, [
    t.expressionStatement(
      // compName.displayName = 'displayName'
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier(compName), t.identifier('displayName')),
        t.stringLiteral(displayName),
      ),
    ),
  ]);

//
//
//
//

const isObserver = (path, t) => {
  return path.node.callee.name === 'observer';
};

const isConstObserver = (path, t) => {
  return (
    t.isIdentifier(path.node.callee) &&
    path.node.arguments &&
    path.node.arguments.length === 1 &&
    t.isIdentifier(path.node.arguments[0]) &&
    path.node.arguments[0].name
  );
};

const isFnObserver = (path, t) => {
  const parentNode = path.parentPath.node;

  return (
    t.isVariableDeclarator(parentNode) && //
    t.isIdentifier(path.node.callee) &&
    path.node.arguments &&
    t.isVariableDeclarator(path.parent) &&
    path.parent.id &&
    t.isIdentifier(path.parent.id) &&
    path.parent.id.name
  );
};

const applyConstDisplayname = (path, t, compName) => {
  const nearestStatement = path.find(t.isStatement);

  nearestStatement.insertAfter(makeDisplayName(t, compName, compName));
};

const applyFnDisplayname = (path, t, compName) => {
  path.parentPath.insertAfter(
    t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier(compName), t.identifier('displayName')),
        t.stringLiteral(compName),
      ),
    ),
  );
};

module.exports = {
  isObserver,
  isConstObserver,
  isFnObserver,
  applyConstDisplayname,
  applyFnDisplayname,
};
