const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'index': './src/pages/index/index.jsx'
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: "js/[name].js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
            {test: /\.html$/, loader: 'html-loader?minimize=true', exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader?minimize=true"), exclude: /node_modules/}
        ]
    },
    plugins: [
        new ExtractTextPlugin("stylesheets/style.min.css"),
        new HtmlWebpackPlugin({
            title: 'Index Template',
            filename: 'index.html',
            template: './src/pages/page-template.ejs',
            chunks: ['index']
        })
    ]
};