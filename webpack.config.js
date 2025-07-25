const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const mode = env.NODE_ENV || argv.mode;
    console.log('Mode:', mode);

    return {
        entry: {
            strelka: path.join(__dirname, 'src', 'app', 'entry.tsx'),
        },
        mode: mode || 'development',
        module: {
            rules: [
                {
                    test: /\.(tsx?|js)$/,
                    exclude: /(node_modules|libs)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', 'json', '.ts', '.tsx'],
            modules: [`${__dirname}/src`, 'node_modules'],
        },
        output: {
            path: path.join(__dirname, 'bundle'),
            filename: 'strelka.js',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.mode': mode,
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'app', 'index.html'),
                filename: 'strelka.html',
                cache: false,
            }),
        ],
    };
};
