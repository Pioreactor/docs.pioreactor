// Wrap the installed search source so autocomplete and the full page report results.
module.exports = function searchEventsPlugin() {
  return {
    name: 'search-events',
    configureWebpack() {
      const webpack = require('webpack');
      return {plugins: [new webpack.NormalModuleReplacementPlugin(
        /^\.\.\/\.\.\/utils\/SearchSourceFactory$/,
        require.resolve('../src/search/SearchSourceFactory.js'),
      )]};
    },
  };
};
