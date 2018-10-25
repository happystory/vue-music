module.exports = {
  devServer: {
    proxy: {
      '/api/getDiscList': {
        target: 'https://c.y.qq.com/',
        headers: {
          referer: 'https://c.y.qq.com/'
        },
        pathRewrite: {
          '^/api/getDiscList': '/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        }
      }
    }
  }
}
