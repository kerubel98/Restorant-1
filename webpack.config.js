const path = require('path')
const htmlPlugins = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    plugins:[
        new htmlPlugins({
            title: 'restorat page',
            filename: 'index.html',
            template: "./src/template.html"
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            }
        ]

    }
}