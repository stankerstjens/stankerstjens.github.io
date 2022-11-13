const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {

    mode: "production",

    entry: './src/index.js',

    plugins: [
        new HtmlWebpackPlugin({
            title: "Stan Kerstjens",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
        new FaviconsWebpackPlugin({
            logo: './src/favicon.svg',
            favicons: {
                appName: "Stan Kerstjens",
            },
        }),
    ],

    output: {
        filename: "main.js",
        path: path.resolve(__dirname),
    },

    module: {
        rules: [{
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
}