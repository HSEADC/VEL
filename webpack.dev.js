const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const SitemapWebpackPlugin = require("sitemap-webpack-plugin").default;
const articles = require("./src/api/articles-list.json");
const lifehacks = require("./src/api/lifehacks-list.json");

getPages = () => {
  const pages = common.plugins.map(plugin => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin'
        && !plugin.options.filename.includes('article.html')
        && !plugin.options.filename.includes('lifehack.html')
        && !plugin.options.filename.includes('route.html')
    ) {
      return plugin.options.filename;
    }

    return null;
  }).filter(Boolean);

  const articleIds = articles.map(article => article.id);
  const lifehackIds = lifehacks.map(lifehack => lifehack.id);
  const routeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pages.push(
      ...articleIds.map(id => `article.html?id=${id}`),
      ...lifehackIds.map(id => `lifehack.html?id=${id}`),
      ...routeIds.map(id => `route.html?id=${id}`),
  )

  return pages;
}

const paths = getPages();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dev_build'),
    clean: false,
  },
  plugins: [
      new SitemapWebpackPlugin({
        base: 'http://localhost:8080/',
        paths,
        options: {
          skipgzip: true,
        }
      })
  ]
})
