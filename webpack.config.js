const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/main/app.js',
        registration: './src/js/security/registration.js',
    },
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: './src/html/index.html'
        }),
        new HTMLPlugin({
            filename: "authorization.html",
            template: './src/html/authorization.html'
        }),
        new HTMLPlugin({
            filename: "registration.html",
            template: './src/html/registration.html'
        }),
        new HTMLPlugin({
            filename: "help.html",
            template: './src/html/help.html'
        }),
        new HTMLPlugin({
            filename: "error.html",
            template: './src/html/error.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
