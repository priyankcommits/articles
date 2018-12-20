/* Karma test runner config for running single test file which uses mocha */
var webpackConfig = require('./webpack.test.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './project/web/app/test/specs/' + process.env.KARMA_SPEC_FILE,
    ],
    preprocessors: {
      './project/web/app/test/specs/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: { noInfo: true },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    usePolling: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};