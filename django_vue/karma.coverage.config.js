/* Karma test runner config for test coverage results test */
var webpackConfig = require('./webpack.coverage.config');
var reporters = ['coverage-istanbul'];


module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'chai', 'sinon', 'karma-typescript'],
    files: [
      './project/web/app/test/specs/*.js'
    ],
    reporters: reporters,
    preprocessors: {
      './project/web/app/**/*.js': "webpack"
    },
    exclude: ["./node_modules"],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    coverageIstanbulReporter: {
      dir: './project/web/app/test/coverage',
      fixWebpackSourcePaths: true,
      reports: ['lcov', 'text-summary', 'html'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};