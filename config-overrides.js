const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const add = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src')
  if(env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
    // config.plugins.push(new BundleAnalyzerPlugin())
  }

  return config
};


module.exports = override(addDecoratorsLegacy(), add())