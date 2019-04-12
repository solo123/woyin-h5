module.exports = function override(config, env) {
  if(env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }

  // do stuff with the webpack config...
  return config;
};