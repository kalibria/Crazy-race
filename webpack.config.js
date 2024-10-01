const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/scripts/index.js', './src/styles/styles.scss'], // Update your entry point if needed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Webpack 5 automatically cleans the output directory
    },
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                    'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: 'babel-loader',
                },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,  // Compress quality level (adjust as needed)
                            },
                            optipng: {
                                enabled: false,  // Disable optipng, use pngquant instead
                            },
                            pngquant: {
                                quality: [0.65, 0.90],  // Adjust quality for PNG files
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // Enable WebP conversion if needed
                            webp: {
                                quality: 75,
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: './dist',
        hot: true,
    },
};

