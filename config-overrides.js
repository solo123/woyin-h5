const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = function override(config, env) {
  config.resolve.alias['@'] = resolve('src')
  if(env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }
  // do stuff with the webpack config...
  return config
};