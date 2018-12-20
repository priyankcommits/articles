var baseConfig = require('./webpack.test.config');

baseConfig.module.rules = [...baseConfig.module.rules,
  {
    test: /\.js|vue$/,
    enforce: 'post',
    loader: 'istanbul-instrumenter-loader',
    exclude: [
      'node_modules',
      /\.specs\.js$/
    ],
    query: {
      esModules: true
    }
  }
];
baseConfig.node = {fs: 'empty', module: 'empty'};

baseConfig.devtool = 'eval';

module.exports = baseConfig;