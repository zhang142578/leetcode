export default (arr, k) => {
//   arr.sort((a, b) => (b - a))
//   return arr[k - 1]
  for (let i = arr.length - 1, tmp; i > arr.length - 1 - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[arr.length - k]
}
