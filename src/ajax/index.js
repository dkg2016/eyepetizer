import axios from 'axios'

let ajax = (options) => {
  return new Promise(resolve => {
    let config = {
      method: options.method || 'GET',
      url: options.url
    }
    axios(config).then(res => {
      resolve(res)
    }).catch(err => {
      console.log(err)
    })
  })
}

export default ajax;