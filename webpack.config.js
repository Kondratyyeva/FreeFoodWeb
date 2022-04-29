const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/js/main/app.js',
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
        new HTMLPlugin({
            filename: "main-catalog.html",
            template: './src/html/main-catalog.html'
        }),
        new HTMLPlugin({
            filename: "personal-account.html",
            template: './src/html/personal-account.html'
        }),
        new HTMLPlugin({
            filename: "favourite.html",
            template: './src/html/favourite.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/,
            //     loader: "file-loader",
            //     options: {
            //         name: "images/[name].[ext]"
            //     }
            // },
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/,
            //     loader: 'url-loader'
            // }
        ],
    },
    performance: {
        hints: false
    }
}
