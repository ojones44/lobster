module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-paper/babel',
			['@babel/plugin-transform-flow-strip-types'],
			['@babel/plugin-proposal-decorators', { legacy: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@assets': './assets',
						'@components': './components',
						// '@data': './data',
						// '@navigation': './navigators',
						// '@utils': './utils',
						'@styles': './styles',
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
		],
	};
};
