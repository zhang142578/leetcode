export default (str) => {
  // 建立数据结构，当作堆栈来用
  let r = []
  let match = (str) => {
    let j = str.match(/0+|1+/)[0]
    // eslint-disable-next-line no-unused-vars
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // eslint-disable-next-line no-template-curly-in-string
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}
