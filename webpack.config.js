const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
                {
                    test: /\.(png|jpeg|jpg|svg)/,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.tsx'],
            modules: [`${__dirname}/src`, 'node_modules'],
            // alias: {
            //     '@ui/*': path.resolve(__dirname, './src/components/ui'),
            //     '@templates/*': path.resolve(__dirname, './src/components/templates'),
            //     '@atoms/*': path.resolve(__dirname, './src/components/atoms'),
            //     '@molecules/*': path.resolve(__dirname, './src/components/molecules'),
            //     '@organisms/*': path.resolve(__dirname, './src/components/organisms'),
            //     '@screens': path.resolve(__dirname, './src/screens'),
            // },
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
            new CopyWebpackPlugin({
                patterns: [{from: path.join(__dirname, 'src', 'fonts'), to: 'fonts'}],
            }),
        ],
    };
};
