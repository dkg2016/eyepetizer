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
  if (!url || url.indexOf('?') < 0) {
    return
  }

  let queryStr = url.split('?')[1]
  let elems = queryStr.split('&')
  let obj = {}
  elems.forEach(el => {
    let idx = el.indexOf('=')
    let key = el.substring(0,idx)
    let value = el.substring(idx+1)
    obj[key] = value
  })

  return obj
}