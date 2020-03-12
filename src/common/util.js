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