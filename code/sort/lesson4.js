// export default(arr) => {
//   // 过滤掉非正整数
//   arr = arr.filter(item => item > 0)
//   if (arr.length) {
//     arr.sort((a, b) => a - b)
//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       for (let i = 0, len = arr.length - 1; i < len; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       return arr.pop() + 1
//     }
//   }
// }
export default(arr) => {
  arr = arr.filter(arr => arr > 0)
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i] - 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}
