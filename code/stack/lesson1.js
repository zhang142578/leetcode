
export default(arr) => {
  let result = []
  let pre1
  let pre2
  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (arr.length) {
          result.pop()
        }
        break
      case 'D':
        pre1 = result.pop()
        result.push(pre1, pre1 * 2)
        break
      case '+':
        pre1 = result.pop()
        pre2 = result.pop()
        result.push(pre2, pre1, pre1 + pre2)
        break
      default:
        result.push(item * 1)
        break
    }
  })
  return result.reduce((total, num) => { return total + num })
}
