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
    return 'VEL';
  }

  return [subpage, 'VEL'].join(' - ');
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
        test: /\.(js|jsx)$/,
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
  resolve: {
    extensions: ['*', '.js', '.jsx'],
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

    // Pages
    new HtmlWebpackPlugin({
      title: getTitle(),
      favicon: './src/images/icons/favicon.svg',
      template: './src/index.ejs',
      filename: './index.html',
      meta: getMeta('Главная', '/index.html'),
      inject: false,
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Статьи'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/articles.ejs',
      filename: './articles.html',
      meta: getMeta('Статьи', '/articles.html'),
      inject: false,
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Статья'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/article.ejs',
      filename: './article.html',
      meta: getMeta('Статья', '/article.html'),
      inject: false,
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Лайфхаки'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/lifehacks.ejs',
      filename: './lifehacks.html',
      meta: getMeta('Лайфхаки', '/lifehacks.html'),
      inject: false,
    }),
    
    new HtmlWebpackPlugin({
      title: getTitle('Лайфхак'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/lifehack.ejs',
      filename: './lifehack.html',
      meta: getMeta('Лайфхак', '/lifehack.html'),
      inject: false,
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Маршруты'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/routes.ejs',
      filename: './routes.html',
      meta: getMeta('Маршруты', '/routes.html'),
      inject: false,
    }),

    new HtmlWebpackPlugin({
      title: getTitle('Маршрут'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/route.ejs',
      filename: './route.html',
      meta: getMeta('Маршрут', '/route.html'),
      inject: false,
    }),
    
    new HtmlWebpackPlugin({
      title: getTitle('О нас'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/about-us.ejs',
      filename: './about-us.html',
      meta: getMeta('О нас', '/about-us.html'),
      inject: false,
    }),
    
    new HtmlWebpackPlugin({
      title: getTitle('Поиск'),
      favicon: './src/images/icons/favicon.svg',
      template: './src/sections/search.ejs',
      filename: './search.html',
      meta: getMeta('Поиск', '/search.html'),
      inject: false,
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace',
        inject: false,
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace',
        inject: false,
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/partials/analytics.html"),
        location: "analytics",
        template_filename: "*",
        priority: "replace",
        inject: false,
      },
    ]),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new JsonMinimizerPlugin(),
    ]
  },
}
