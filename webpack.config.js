/*
 * @Author: iDzeir
 * @Date: 2018-11-19 11:09:53
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-19 15:22:38
 */
const path = require('path');
const HappyPack = require('happypack');
const threads = require('os').cpus().length;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    stats: {
        modules: false
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: 'happypack/loader?id=typescript' }],
                include: /src/
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'typescript',
            threads: threads,
            threadPool: HappyPack.ThreadPool({size: threads}),
            verbose: false,
            loaders: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true
                    }
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','index.html'),
            title: 'redux 周边测试',
            inject: 'body'
        })
    ],
    devServer: {
        https: false,
        open: true,
        contentBase: [path.join(__dirname, 'dist')],
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            ignored: /node_modules/
        },
        clientLogLevel: 'error',
    }
};
