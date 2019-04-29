export default (s, k) => {
  let arr = []
  for (let i = 0; i < s.length; i = i + k) {
    arr.push(s.substring(i, i + k))
    if (arr.length % 2 !== 0) {
      arr[arr.length - 1] = arr[arr.length - 1].split('').reverse().join('')
    }
  }
  return arr.join('')
}
