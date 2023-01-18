module.exports = {
    //...
    resolveLoader: {
      modules: ['node_modules'],
      extensions: ['.js', 'jsx', 'json', 'ts', 'tsx'],
      mainFields: ['loader', 'main'],
    },
  };