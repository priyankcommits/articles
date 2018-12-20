var SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');
var baseConfig = require('./webpack.config.js');
var merge = require('webpack-merge');
var webpack = require('webpack');

module.exports = merge(baseConfig, {
});

delete module.exports.entry;
delete module.exports.output;
delete module.exports.plugins;

baseConfig.node = {fs: 'empty', module: 'empty'};
baseConfig.plugins = [...baseConfig.plugins,
  new SourceMapDevToolPlugin({
    filename: null,
    test: /\.(ts|js)($|\?)/i
  }),
  new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
  }),
];

baseConfig.devtool = '#inline-source-map';

module.exports = baseConfig;