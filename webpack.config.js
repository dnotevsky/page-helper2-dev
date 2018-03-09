const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app.bundle': path.resolve(__dirname, "./src/app.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    publicPath: path.build
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8007,
    proxy: {
      '/api/*': {
        target: 'https://postnauka.ru/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        },
        logLevel: 'debug'
      }
    }
  },
  plugins: [
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/index.html"),
      template: path.resolve(__dirname, "./src/pages/page.pug"),
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/images'),
      to: 'images'
    }]),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/fonts'),
      to: 'fonts'
    }]),

    // components here
    // for footer
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/footer/component.html"),
      template: path.resolve(__dirname, "./src/components/footer/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/footer/footer.styl'),
      to: path.resolve(__dirname, "./dist/components/footer/style.styl")
    }]),

    // for header
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/header/component.html"),
      template: path.resolve(__dirname, "./src/components/header/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/header/header.styl'),
      to: path.resolve(__dirname, "./dist/components/header/style.styl")
    }]),

    // for lecture_preview
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/lecture_preview/component.html"),
      template: path.resolve(__dirname, "./src/components/lecture_preview/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/lecture_preview/lecture_preview.styl'),
      to: path.resolve(__dirname, "./dist/components/lecture_preview/style.styl")
    }]),

    // for start-slide-1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/start-slide-1/component.html"),
      template: path.resolve(__dirname, "./src/components/start-slide-1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/start-slide-1/start-slide-1.styl'),
      to: path.resolve(__dirname, "./dist/components/start-slide-1/style.styl")
    }]),

    // for start-slide-1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/start-slide-2/component.html"),
      template: path.resolve(__dirname, "./src/components/start-slide-2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/start-slide-2/start-slide-2.styl'),
      to: path.resolve(__dirname, "./dist/components/start-slide-2/style.styl")
    }])
  ]
};
