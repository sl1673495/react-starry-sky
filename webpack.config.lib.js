const path = require('path');

const ENV = process.env.NODE_ENV || 'development';


const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'lib');
const CLIENT_DIR = path.resolve(OUTPUT_DIR);

module.exports = {
  mode: ENV,
  target: 'web',
  context: '',
  entry: SOURCE_DIR,
  output: {
    path: CLIENT_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'React',
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
};
