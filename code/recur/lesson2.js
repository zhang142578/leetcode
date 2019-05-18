export default(str, words) => {
  let result = []
  let num = words.length
  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  // 修改输出
  const _result = []
  result.forEach(item => {
    const sub = item.join('')
    for (let i = 0, idx; idx !== -1; i++) {
      if (str.length - idx - 1 < sub.length) {
        return
      }
      idx = str.indexOf(sub, i)
      i = idx + 1
      _result.push(idx)
    }
  })
  return _result.filter(item => item !== -1).sort((a, b) => a - b)
}
