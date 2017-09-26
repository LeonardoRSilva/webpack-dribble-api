var webpack = require('webpack');
var path  = require('path');

module.exports = {
    context: path.resolve(__dirname + "/public/js"),
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname + "/build"),

        filename: "./bundle.js"
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=10000' // => DataUrl if "file.png" is smaller that 10kb
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style!css!autoprefixer"
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style!css!autoprefixer!sass'
        }]
    }
};