const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  const CSSextract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          //? make the ? optional! Look for both scss and css(forccs for namalizer)
          test: /\.s?css$/,
          use: CSSextract.extract({
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },
    plugins: [CSSextract],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};

// entry point -> output file for bundle
// console.log(path.join(__dirname, 'public'));
