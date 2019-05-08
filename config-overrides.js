const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = function override(config, env) {
  config.resolve.alias['@'] = resolve('src')
  if(env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'weui.js': 'weui.js'
    }
    // config.plugins.push(new BundleAnalyzerPlugin())
  }

  // do stuff with the webpack config...
  return config
};