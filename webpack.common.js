const path = require('path');
module.exports = {
    
    entry: './src/index.ts',

    module: {
        rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
        },
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { url: false }
            }
          ]
        },
        ],
    },
    resolve: {
        extensions: [
          '.ts', '.js',
        ],
      },
};
