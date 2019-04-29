export default(arr) => {
//   if (arr.length < 2) {
//     return 0
//   }
//   arr.sort()
//   let max = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     let tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
  if (arr.length < 2) {
    return 0
  } else {
    let len = arr.length - 1
    let max = 0
    let space = 0
    for (let i = len, tmp; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
        }
      }
      if (i < len) {
        space = arr[i + 1] - arr[i]
        if (space > max) {
          max = space
        }
      }
    }
    return Math.max(max, arr[1] - arr[0])
  }
}
