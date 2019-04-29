export default (arr) => {
  arr.sort((a, b) => a - b)
  let odd = 1
  let even = 0
  let r = []
  arr.forEach(item => {
    if (item % 2 === 0) {
      r[even] = item
      even += 2
    } else {
      r[odd] = item
      odd += 2
    }
  })
  return r
}
