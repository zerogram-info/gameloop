
const path = require('path');
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    
    // 違う場所に出力
    // output: {
    //     path: path.resolve(__dirname, 'prod'),
    //   },
  })