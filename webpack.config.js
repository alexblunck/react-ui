const path = require('path')

module.exports = function (env, argv) {
    let devtool

    if (argv.mode === 'development') {
        devtool = 'sourcemap'
    }

    return {
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: `blunck-ui.js`,
            library: 'blunckUi',
            libraryTarget: 'umd'
        },
        devtool: devtool,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        externals: [
            'classnames',
            'prop-types',
            'react'
        ]
    }
}
