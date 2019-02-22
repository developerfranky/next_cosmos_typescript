const path = require('path');

module.exports = {
  publicPath: 'static',
  publicUrl: '/static/',

  webpack: (config, { env }) => {
    return {
      ...config,
      module: {
        rules: [
          {
            test: /\.(ts|tsx)?$/,
            include: [
              path.resolve(__dirname, '__fixtures__'), 
              path.resolve(__dirname, 'components'),
            ],
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
          },
        ]
      },
      resolve: {
        extensions: ['.ts', '.tsx','.js', '.jsx']
      },
    };
  },
};

