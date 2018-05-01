const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

  config = rewireLess(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: "css" }], config);

  return config;
};