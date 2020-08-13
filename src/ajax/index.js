import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.3.26:8000'

let ajax = (options) => {
  return new Promise(resolve => {
    let params = options.data || {}
    let config = {
      method: options.method || 'GET',
      url: options.url,
      timeout: 3000,
      transformRequest: [(data) => {
        let ret = ''
        let key = ''
        for (key in data) {
          let val = data[key]
          ret =+ encodeURIComponent(key) + '=' + encodeURIComponent(val) + '&'
        }
        return ret.slice(0, -1)
      }],
      headers: {'Content-Type':'application/x-www-form-urlencoded'}
    }
    if (options.method.toUpperCase() === 'GET') {
      config.params = params
      config.randomTime = new Date().getTime()
    }
    axios(config).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log(err)
    })
  })
}

export default ajax;