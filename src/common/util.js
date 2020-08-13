export function formatTime (duration) {

  duration = Number(duration)
  
  if (duration > 0 && duration < 60) {
    return '00' + ':' + _add(duration)
  }

  if (60 <= duration &&  duration< 3600) {
    return _add(parseInt(duration/60)) + ':' + _add(duration%60)
  }
  if (3600 <= duration) {
    return  _add(parseInt(duration/3600)) + ':' + _add(parseInt(duration%3600/60)) + ':' + _add(duration%60%60)
  }
  
  function _add(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num
    }
  }
}

export function parseQuery (url) {
  let queryArr = url.split('?')
  let queryStr= queryArr[1]
  let tem = queryStr.split('&')
  let obj = {}
  tem.forEach(item => {
    let idx = item.indexOf('=')
    let key = item.substring(0,idx)
    let value = item(idx,-1)
    obj[key] = value
  })

  return obj
}