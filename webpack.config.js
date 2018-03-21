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
      template: path.resolve(__dirname, "./src/pages/index.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page1.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page1.html"),
      template: path.resolve(__dirname, "./src/pages/page1.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page2.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page2.html"),
      template: path.resolve(__dirname, "./src/pages/page2.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page3.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page3.html"),
      template: path.resolve(__dirname, "./src/pages/page3.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page4.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page4.html"),
      template: path.resolve(__dirname, "./src/pages/page4.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page5.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page5.html"),
      template: path.resolve(__dirname, "./src/pages/page5.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page6.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page6.html"),
      template: path.resolve(__dirname, "./src/pages/page6.pug"),
      hash: true
    }),
    // http://0.0.0.0:8007/page7.html
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/page7.html"),
      template: path.resolve(__dirname, "./src/pages/page7.pug"),
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
    }]),

    // for fact_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_2/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_2/fact_2.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_2/style.styl")
    }]),

    // for nav_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_2/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_2/nav_2.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_2/style.styl")
    }]),

    // for event_9
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_9/component.html"),
      template: path.resolve(__dirname, "./src/components/event_9/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_9/event_9.styl'),
      to: path.resolve(__dirname, "./dist/components/event_9/style.styl")
    }]),

    // for video_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_5/component.html"),
      template: path.resolve(__dirname, "./src/components/video_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_5/video_5.styl'),
      to: path.resolve(__dirname, "./dist/components/video_5/style.styl")
    }]),

    // for event_10
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_10/component.html"),
      template: path.resolve(__dirname, "./src/components/event_10/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_10/event_10.styl'),
      to: path.resolve(__dirname, "./dist/components/event_10/style.styl")
    }]),

    // for event_11
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_11/component.html"),
      template: path.resolve(__dirname, "./src/components/event_11/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_11/event_11.styl'),
      to: path.resolve(__dirname, "./dist/components/event_11/style.styl")
    }]),

    // for event_12
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_12/component.html"),
      template: path.resolve(__dirname, "./src/components/event_12/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_12/event_12.styl'),
      to: path.resolve(__dirname, "./dist/components/event_12/style.styl")
    }]),

    // for event_13
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_13/component.html"),
      template: path.resolve(__dirname, "./src/components/event_13/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_13/event_13.styl'),
      to: path.resolve(__dirname, "./dist/components/event_13/style.styl")
    }]),

    // for quote_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_4/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_4/quote_4.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_4/style.styl")
    }]),

    // for event_14
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_14/component.html"),
      template: path.resolve(__dirname, "./src/components/event_14/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_14/event_14.styl'),
      to: path.resolve(__dirname, "./dist/components/event_14/style.styl")
    }]),

    // for event_15
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_15/component.html"),
      template: path.resolve(__dirname, "./src/components/event_15/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_15/event_15.styl'),
      to: path.resolve(__dirname, "./dist/components/event_15/style.styl")
    }]),

    // for fact_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_3/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_3/fact_3.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_3/style.styl")
    }]),

    // for nav_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_3/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_3/nav_3.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_3/style.styl")
    }]),

    // for event_16
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_16/component.html"),
      template: path.resolve(__dirname, "./src/components/event_16/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_16/event_16.styl'),
      to: path.resolve(__dirname, "./dist/components/event_16/style.styl")
    }]),

    // for video_6
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_6/component.html"),
      template: path.resolve(__dirname, "./src/components/video_6/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_6/video_6.styl'),
      to: path.resolve(__dirname, "./dist/components/video_6/style.styl")
    }]),

    // for event_17
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_17/component.html"),
      template: path.resolve(__dirname, "./src/components/event_17/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_17/event_17.styl'),
      to: path.resolve(__dirname, "./dist/components/event_17/style.styl")
    }]),

    // for event_18
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_18/component.html"),
      template: path.resolve(__dirname, "./src/components/event_18/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_18/event_18.styl'),
      to: path.resolve(__dirname, "./dist/components/event_18/style.styl")
    }]),

    // for article_1
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/article_1/component.html"),
      template: path.resolve(__dirname, "./src/components/article_1/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/article_1/article_1.styl'),
      to: path.resolve(__dirname, "./dist/components/article_1/style.styl")
    }]),

    // for event_19
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_19/component.html"),
      template: path.resolve(__dirname, "./src/components/event_19/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_19/event_19.styl'),
      to: path.resolve(__dirname, "./dist/components/event_19/style.styl")
    }]),

    // for event_20
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_20/component.html"),
      template: path.resolve(__dirname, "./src/components/event_20/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_20/event_20.styl'),
      to: path.resolve(__dirname, "./dist/components/event_20/style.styl")
    }]),

    // for fact_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_4/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_4/fact_4.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_4/style.styl")
    }]),

    // for nav_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_4/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_4/nav_4.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_4/style.styl")
    }]),

    // for event_21
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_21/component.html"),
      template: path.resolve(__dirname, "./src/components/event_21/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_21/event_21.styl'),
      to: path.resolve(__dirname, "./dist/components/event_21/style.styl")
    }]),

    // for event_22
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_22/component.html"),
      template: path.resolve(__dirname, "./src/components/event_22/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_22/event_22.styl'),
      to: path.resolve(__dirname, "./dist/components/event_22/style.styl")
    }]),

    // for event_23
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_23/component.html"),
      template: path.resolve(__dirname, "./src/components/event_23/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_23/event_23.styl'),
      to: path.resolve(__dirname, "./dist/components/event_23/style.styl")
    }]),

    // for event_24
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_24/component.html"),
      template: path.resolve(__dirname, "./src/components/event_24/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_24/event_24.styl'),
      to: path.resolve(__dirname, "./dist/components/event_24/style.styl")
    }]),

    // for event_25
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_25/component.html"),
      template: path.resolve(__dirname, "./src/components/event_25/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_25/event_25.styl'),
      to: path.resolve(__dirname, "./dist/components/event_25/style.styl")
    }]),

    // for event_26
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_26/component.html"),
      template: path.resolve(__dirname, "./src/components/event_26/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_26/event_26.styl'),
      to: path.resolve(__dirname, "./dist/components/event_26/style.styl")
    }]),

    // for event_27
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_27/component.html"),
      template: path.resolve(__dirname, "./src/components/event_27/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_27/event_27.styl'),
      to: path.resolve(__dirname, "./dist/components/event_27/style.styl")
    }]),

    // for quote_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_5/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_5/quote_5.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_5/style.styl")
    }]),

    // for quote_6
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_6/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_6/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_6/quote_6.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_6/style.styl")
    }]),

    // for quote_7
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_7/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_7/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_7/quote_7.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_7/style.styl")
    }]),

    // for video_7
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_7/component.html"),
      template: path.resolve(__dirname, "./src/components/video_7/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_7/video_7.styl'),
      to: path.resolve(__dirname, "./dist/components/video_7/style.styl")
    }]),

    // for article_2
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/article_2/component.html"),
      template: path.resolve(__dirname, "./src/components/article_2/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/article_2/article_2.styl'),
      to: path.resolve(__dirname, "./dist/components/article_2/style.styl")
    }]),

    // for fact_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_5/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_5/fact_5.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_5/style.styl")
    }]),

    // for nav_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_5/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_5/nav_5.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_5/style.styl")
    }]),

    // for fact_6
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_6/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_6/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_6/fact_6.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_6/style.styl")
    }]),

    // for nav_6
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/nav_6/component.html"),
      template: path.resolve(__dirname, "./src/components/nav_6/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/nav_6/nav_6.styl'),
      to: path.resolve(__dirname, "./dist/components/nav_6/style.styl")
    }]),

    // for event_28
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_28/component.html"),
      template: path.resolve(__dirname, "./src/components/event_28/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_28/event_28.styl'),
      to: path.resolve(__dirname, "./dist/components/event_28/style.styl")
    }]),

    // for event_29
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_29/component.html"),
      template: path.resolve(__dirname, "./src/components/event_29/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_29/event_29.styl'),
      to: path.resolve(__dirname, "./dist/components/event_29/style.styl")
    }]),

    // for event_30
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_30/component.html"),
      template: path.resolve(__dirname, "./src/components/event_30/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_30/event_30.styl'),
      to: path.resolve(__dirname, "./dist/components/event_30/style.styl")
    }]),

    // for video_8
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_8/component.html"),
      template: path.resolve(__dirname, "./src/components/video_8/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_8/video_8.styl'),
      to: path.resolve(__dirname, "./dist/components/video_8/style.styl")
    }]),

    // for quote_8
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/quote_8/component.html"),
      template: path.resolve(__dirname, "./src/components/quote_8/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/quote_8/quote_8.styl'),
      to: path.resolve(__dirname, "./dist/components/quote_8/style.styl")
    }]),

    // for event_31
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_31/component.html"),
      template: path.resolve(__dirname, "./src/components/event_31/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_31/event_31.styl'),
      to: path.resolve(__dirname, "./dist/components/event_31/style.styl")
    }]),

    // for event_32
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_32/component.html"),
      template: path.resolve(__dirname, "./src/components/event_32/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_32/event_32.styl'),
      to: path.resolve(__dirname, "./dist/components/event_32/style.styl")
    }]),

    // for event_33
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_33/component.html"),
      template: path.resolve(__dirname, "./src/components/event_33/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_33/event_33.styl'),
      to: path.resolve(__dirname, "./dist/components/event_33/style.styl")
    }]),

    // for event_34
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_34/component.html"),
      template: path.resolve(__dirname, "./src/components/event_34/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_34/event_34.styl'),
      to: path.resolve(__dirname, "./dist/components/event_34/style.styl")
    }]),

    // for event_35
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_35/component.html"),
      template: path.resolve(__dirname, "./src/components/event_35/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_35/event_35.styl'),
      to: path.resolve(__dirname, "./dist/components/event_35/style.styl")
    }]),

    // for event_36
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/event_36/component.html"),
      template: path.resolve(__dirname, "./src/components/event_36/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/event_36/event_36.styl'),
      to: path.resolve(__dirname, "./dist/components/event_36/style.styl")
    }]),

    // for video_9
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/video_9/component.html"),
      template: path.resolve(__dirname, "./src/components/video_9/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/video_9/video_9.styl'),
      to: path.resolve(__dirname, "./dist/components/video_9/style.styl")
    }]),

    // for article_3
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/article_3/component.html"),
      template: path.resolve(__dirname, "./src/components/article_3/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/article_3/article_3.styl'),
      to: path.resolve(__dirname, "./dist/components/article_3/style.styl")
    }]),

    // for article_4
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/article_4/component.html"),
      template: path.resolve(__dirname, "./src/components/article_4/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/article_4/article_4.styl'),
      to: path.resolve(__dirname, "./dist/components/article_4/style.styl")
    }]),

    // for article_5
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/article_5/component.html"),
      template: path.resolve(__dirname, "./src/components/article_5/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/article_5/article_5.styl'),
      to: path.resolve(__dirname, "./dist/components/article_5/style.styl")
    }]),

    // for fact_7
    new HTMLPlugin({
      filename: path.resolve(__dirname, "./dist/components/fact_7/component.html"),
      template: path.resolve(__dirname, "./src/components/fact_7/component.pug"),
      hash: false,
      inject: false
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, './src/components/fact_7/fact_7.styl'),
      to: path.resolve(__dirname, "./dist/components/fact_7/style.styl")
    }])
  ]
};
