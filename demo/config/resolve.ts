import path from 'path'
export const resolve = {
  extensions: ['.ts', '.js'],
  alias: {
    '@': path.resolve('src'),
    '@store': path.resolve('src/store'),
    '@api': path.resolve('src/api'),
    '@router': path.resolve('src/router'),
    '@assets': path.resolve('src/assets/js'),
    '@img': path.resolve('src/assets/img'),
    '@com': path.resolve('src/components'),
    '@extend': path.resolve('src/extend'),
    '@view': path.resolve('src/views'),
    '@base': path.resolve('src/views/base/views'),
    '@dzph': path.resolve('src/views/dzph/views'),
    '@demo': path.resolve('src/views/demo/views'),
    '@yyhsglxt': path.resolve('src/views/yyhsglxt/views')
  }
}