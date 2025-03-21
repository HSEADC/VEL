const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

const webpack = require('webpack')
const path = require('path');
const { get } = require('http');

const getTitle = (subpage = undefined) => {
  if (!subpage) {
    return 'Vell';
  }

  return [subpage, 'Vell'].join(' - ');
}

const getMeta = (title, link) => ({
  'og:title': title,
  'og:description': title,
  'og:type': 'website',
  'og.image': '',
  'og:url': link,
  'twitter:title': title,
  'twitter:description': title,
  'twitter:card': 'summary',
  'twitter.image': '',
  'twitter:url': link,
});

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.json$/i,
        type: "asset/resource",
        generator: {
          filename: 'api/[name].[ext]'
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: './src/images', to: 'images' },
        { from: './src/api', to: 'api' }
      ],
    }),

    // Index
    new HtmlWebpackPlugin({
      title: getTitle(),
      favicon: './src/images/icons/favicon.svg',
      template: './src/index.ejs',
      filename: './index.html',
      meta: getMeta('Главная', '/index.html'),
    }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Статьи'),
    //   template: './src/sections/articles.ejs',
    //   filename: './articles.html',
    //   meta: getMeta('Статьи', '/articles.html'),
    // }),

    new HtmlWebpackPlugin({
      title: getTitle('Правила безопасности для велосипедистов'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/articles/1.ejs',
      filename: './articles-1.html',
      meta: getMeta('Article 1', '/articles-1.html'),
    }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Article 2'),
    //   template: './src/sections/articles/2.ejs',
    //   filename: './articles-2.html',
    //   meta: getMeta('Article 2', '/articles-2.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Article 3'),
    //   template: './src/sections/articles/3.ejs',
    //   filename: './articles-3.html',
    //   meta: getMeta('Article 3', '/articles-3.html'),
    // }),

    new HtmlWebpackPlugin({
      title: getTitle('Лайфхаки'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/lifehacks.ejs',
      filename: './lifehacks.html',
      meta: getMeta('Лайфхаки', '/lifehacks.html'),
      inject: false,
    }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Lifehack 1'),
    //   template: './src/sections/lifehacks/1.ejs',
    //   filename: './lifehacks-1.html',
    //   meta: getMeta('Lifehack 1', '/lifehacks/1.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Lifehack 2'),
    //   template: './src/sections/lifehacks/2.ejs',
    //   filename: './lifehacks-2.html',
    //   meta: getMeta('Lifehack 2', '/lifehacks-2.html'),
    // }),

    new HtmlWebpackPlugin({
      title: getTitle('Маршруты'),
      template: './src/sections/routes.ejs',
      filename: './routes.html',
      meta: getMeta('Маршруты', '/routes.html'),
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Ищем природу в городе'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/routes/1.ejs',
      filename: './routes-1.html',
      meta: getMeta('Route 1', '/routes-1.html'),
    }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Route 2'),
    //   template: './src/sections/routes/2.ejs',
    //   filename: './routes-2.html',
    //   meta: getMeta('Route 2', '/routes-2.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Route 3'),
    //   template: './src/sections/routes/3.ejs',
    //   filename: './routes-3.html',
    //   meta: getMeta('Route 3', '/routes-3.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Тесты'),
    //   template: './src/sections/tests.ejs',
    //   filename: './tests.html',
    //   meta: getMeta('Тесты', '/tests.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Test 1'),
    //   template: './src/sections/tests/1.ejs',
    //   filename: './tests-1.html',
    //   meta: getMeta('Test 1', '/tests-1.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Test 2'),
    //   template: './src/sections/tests/2.ejs',
    //   filename: './tests-2.html',
    //   meta: getMeta('Test 2', '/tests-2.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Test 3'),
    //   template: './src/sections/tests/3.ejs',
    //   filename: './tests-3.html',
    //   meta: getMeta('Test 3', '/tests-3.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('Test 4'),
    //   template: './src/sections/tests/4.ejs',
    //   filename: './tests-4.html',
    //   meta: getMeta('Test 4', '/tests-4.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   title: getTitle('О нас'),
    //   template: './src/sections/about-us.ejs',
    //   filename: './about-us.html',
    //   meta: getMeta('О нас', '/about-us.html'),
    // }),

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace',
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace',
      }
    ]),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new JsonMinimizerPlugin(),
    ]
  }
}
