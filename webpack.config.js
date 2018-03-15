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

    // for start
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/start/component.html"),
      template: path.resolve(__dirname, "./src/components/start/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/start/start.styl'),
      to: path.resolve(__dirname, "./dist/components/start/style.styl")
    }]),

    // for about
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/about/component.html"),
      template: path.resolve(__dirname, "./src/components/about/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/about/about.styl'),
      to: path.resolve(__dirname, "./dist/components/about/style.styl")
    }]),

    // for event_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_1/component.html"),
      template: path.resolve(__dirname, "./src/components/event_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_1/event_1.styl'),
      to: path.resolve(__dirname, "./dist/components/event_1/style.styl")
    }]),

    // for event_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_2/component.html"),
      template: path.resolve(__dirname, "./src/components/event_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_2/event_2.styl'),
      to: path.resolve(__dirname, "./dist/components/event_2/style.styl")
    }]),

    // for video_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_1/component.html"),
      template: path.resolve(__dirname, "./src/components/video_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_1/video_1.styl'),
      to: path.resolve(__dirname, "./dist/components/video_1/style.styl")
    }]),

    // for video_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_2/component.html"),
      template: path.resolve(__dirname, "./src/components/video_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_2/video_2.styl'),
      to: path.resolve(__dirname, "./dist/components/video_2/style.styl")
    }]),

    // for fact_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_1/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_1/fact_1.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_1/style.styl")
    }]),

    // for nav_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_1/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_1/nav_1.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_1/style.styl")
    }]),

    // for event_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_3/component.html"),
      template: path.resolve(__dirname, "./src/components/event_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_3/event_3.styl'),
      to: path.resolve(__dirname, "./dist/components/event_3/style.styl")
    }]),

    // for video_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_3/component.html"),
      template: path.resolve(__dirname, "./src/components/video_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_3/video_3.styl'),
      to: path.resolve(__dirname, "./dist/components/video_3/style.styl")
    }]),

    // for event_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_4/component.html"),
      template: path.resolve(__dirname, "./src/components/event_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_4/event_4.styl'),
      to: path.resolve(__dirname, "./dist/components/event_4/style.styl")
    }]),

    // for quote_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_1/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_1/quote_1.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_1/style.styl")
    }]),

    // for event_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_5/component.html"),
      template: path.resolve(__dirname, "./src/components/event_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_5/event_5.styl'),
      to: path.resolve(__dirname, "./dist/components/event_5/style.styl")
    }]),

    // for quote_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_2/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_2/quote_2.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_2/style.styl")
    }]),

    // for video_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_4/component.html"),
      template: path.resolve(__dirname, "./src/components/video_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_4/video_4.styl'),
      to: path.resolve(__dirname, "./dist/components/video_4/style.styl")
    }]),

    // for event_6
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_6/component.html"),
      template: path.resolve(__dirname, "./src/components/event_6/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_6/event_6.styl'),
      to: path.resolve(__dirname, "./dist/components/event_6/style.styl")
    }]),

    // for quote_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_3/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_3/quote_3.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_3/style.styl")
    }]),

    // for event_7
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_7/component.html"),
      template: path.resolve(__dirname, "./src/components/event_7/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_7/event_7.styl'),
      to: path.resolve(__dirname, "./dist/components/event_7/style.styl")
    }]),

    // for event_8
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_8/component.html"),
      template: path.resolve(__dirname, "./src/components/event_8/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_8/event_8.styl'),
      to: path.resolve(__dirname, "./dist/components/event_8/style.styl")
    }])
  ]
};
