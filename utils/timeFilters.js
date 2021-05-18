export function nowTime () {
  function time () {
    const nowtime = new Date()
    const year = nowtime.getFullYear()
    const month = nowtime.getMonth() + 1
    const day = nowtime.getDate()
    const hh = nowtime.getHours()
    const mm = nowtime.getMinutes()
    const ss = nowtime.getSeconds()
    return `当前时间：${year}年${month}月${day}-${hh}:${mm}:${ss}`
  }
  return time()
}
