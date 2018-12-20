var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: ['./project/web/app/main.js'],
  output: {
    path: path.resolve(__dirname, './project/static/js/bundle/'),
    publicPath: './project/static/js/bundle/',
    filename: 'app.js',
  },
  plugins: [
     new BundleTracker({filename: 'project/webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};