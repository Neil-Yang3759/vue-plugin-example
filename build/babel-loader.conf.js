class BabelLoaderConfig {
  constructor(resolve) {
    const isPublish =  process.env.NODE_ENV === 'publish'

    this.config = {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        resolve('src'),
        resolve('test'),
        resolve('node_modules/webpack-dev-server/client')
      ],
      options: {
        presets: [
          ['env', {
            modules: false,
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            }
          }],
          'stage-2'
        ],
        plugins: ['transform-vue-jsx']
      }
    }

    // 只有不是在套件publish的時候才使用transform-runtime
    if(!isPublish) this.config.options.plugins.push('transform-runtime')
  }

  exportConfig() {
    return this.config
  }
}
module.exports = function (resolve) {
  return new BabelLoaderConfig(resolve).exportConfig()
}