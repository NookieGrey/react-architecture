const {override, addLessLoader, fixBabelImports} = require("customize-cra");

module.exports = override(
  addLessLoader(),
  fixBabelImports("import", {libraryName: 'antd', libraryDirectory: 'es', style: "css"})
);