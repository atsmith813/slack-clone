module.exports = {
  mode: 'development',
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        },
        test: /\.js$/,
        exclude: /(node_modules)/
      }
    ]
  }
};
