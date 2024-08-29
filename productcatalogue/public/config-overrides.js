const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets/images',
        },
      },
    ],
  })
);
