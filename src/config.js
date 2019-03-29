export default {
  // 异步请求配置
  request: {
    host: 'http://www.yohomars.com/',
    withHeaders: () => ({
      model: ''
    }),
    afterResponse: response => {
      const {
        data,
        message,
        code
      } = response

      let _res = {
        status: code === 200,
        data,
        message,
        code
      }
      return _res
    },

    isSuccess: response => {
      return response && response.status
    },

    errorHandle: err => {
      console.log('request error', err)
    }
  }
}
