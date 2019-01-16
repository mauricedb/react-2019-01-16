module.exports = {
  mode: 'development',
  entry: './src/main.js',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
