// @flow strict
const flowRemoveTypes = require('flow-remove-types');
const prettier = require('prettier');

module.exports = function removeFlowTypesLoader(source /*: string */) {
  const callback = this.async();
  this.cacheable();

  const options = {};
  const removed = flowRemoveTypes(source).toString().replace('//       strict', '');

  // $FlowFixMe[prop-missing]
  prettier.resolveConfig(process.cwd()).then((prettierOptions) => {
    const formatted = prettier
      // $FlowFixMe[prop-missing]
      .format(removed, {
        ...prettierOptions,
        parser: 'babel',
      })
      .replace(`import {} from 'react';\n`, '');

    const json = JSON.stringify(formatted)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
    const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
    callback(null, `${esModule ? 'export default' : 'module.exports ='} ${json};`);
  });
};
