var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: './djangowebpack/static/assets/js/index.js',
  output: {
      path: path.resolve('./djangowebpack/static/webpack_bundles/'),
      filename: "[name]-[hash].js"
  },
   /*resolve: {
        extensions: ['.scss','eot','woff','ttf','svg']
    },
*/   /*module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','sass-loader'],
            publicPath: '/dist'
        })
      }
    ]
	},*/
   module: {
    rules: [
      {
        test: [/\.css$/,/\.scss$/],
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}