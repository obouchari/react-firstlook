let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/app'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpg)$/, use: ['url-loader?limit=10000'] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
}