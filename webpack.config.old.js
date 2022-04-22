// Reference: https://www.toptal.com/react/webpack-react-tutorial-pt-1

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, { mode }) => {
	const isProduction = mode === 'production';

	return {
		devtool: !isProduction && 'cheap-module-source-map',
		entry: './src/index.js',
		output: {
			clean: true,
			path: path.resolve(__dirname, 'dist'),
			filename: 'scripts/[name].[contenthash:8].js'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: false,
							envName: isProduction ? 'production' : 'development'
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.module.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1
							}
						},
						'postcss-loader'
					]
				},
				{
					test: /\.s[ac]ss$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2
							}
						},
						'resolve-url-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(png|jpg|gif)$/i,
					use: {
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'media/[name].[hash:8].[ext]'
						}
					}
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack']
				},
				{
					test: /\.(eot|otf|ttf|woff|woff2)$/,
					loader: require.resolve('file-loader'),
					options: {
						name: 'media/[name].[hash:8].[ext]'
					}
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		plugins: [
			isProduction && new MiniCssExtractPlugin({
				filename: 'scripts/[name].[contenthash:8].css',
				chunkFilename: 'scripts/[name].[contenthash:8].chunk.css'
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(
					isProduction ? 'production' : 'development'
				)
			}),
			new HtmlWebpackPlugin({
				inject: false,
				template: path.resolve(__dirname, 'src', 'index.html'),
				title: 'React Form'
			})
		].filter(Boolean),
		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserWebpackPlugin({
					terserOptions: {
						compress: {
							comparisons: false
						},
						mangle: {
							safari10: true
						},
						output: {
							comments: false,
							ascii_only: true
						},
						warnings: false
					}
				}),
				new CssMinimizerPlugin()
			],
			splitChunks: {
				chunks: 'all',
				minSize: 0,
				maxInitialRequests: 20,
				maxAsyncRequests: 20,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name(module, chunks, cacheGroupKey) {
							console.log('-----------------');
							console.log(module.context);
							console.log(module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/));
							const packageName = module.context
								? module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
								: 'TEST';

							return `${cacheGroupKey}.${packageName.replace('@', '')}`;
						}
					},
					common: {
						minChunks: 2,
						priority: -10
					}
				}
			},
			runtimeChunk: 'single'
		},
		devServer: {
			compress: true,
			historyApiFallback: true,
			open: true,
			client: {
				overlay: true
			}
		},
		mode: isProduction ? 'production' : 'development'
	};
};
